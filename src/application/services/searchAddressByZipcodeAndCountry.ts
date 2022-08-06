import { HttpGetClient, HttpStatusCode } from '@/application/contracts/http'
import { modelToEntityAddressMapper } from '@/application/mappers'
import { AddressModel } from '@/application/models'
import { Address } from '@/domain/entities'
import { UnexpectedError } from '@/domain/errors'
import { SearchAddressByZipcodeAndCountry } from '@/domain/usecases'

export class SearchAddressByZipcodeAndCountryService implements SearchAddressByZipcodeAndCountry {
  constructor(private readonly httpGetClient: HttpGetClient<never, AddressModel>) {}

  async search(zipCode: string, countryCode: string): Promise<Address | undefined> {
    const response = await this.httpGetClient.get({
      url: `https://api.zippopotam.us/${countryCode.toLowerCase()}/${zipCode}`
    })

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return modelToEntityAddressMapper(response.body)
      default:
        throw new UnexpectedError()
    }
  }
}
