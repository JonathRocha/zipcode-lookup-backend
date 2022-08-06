import { SearchAddressByZipcodeAndCountry } from '@/domain/usecases'
import { APIResponse, Controller, ok, serverError } from '@/presentation/contracts'
import { AddressViewModel } from '@/presentation/view-models'

export class SearchAddressController implements Controller {
  constructor(private readonly searchAddressByZipcodeAndCountry: SearchAddressByZipcodeAndCountry) {}

  async handle(request: SearchAddressController.Request): Promise<APIResponse<AddressViewModel>> {
    try {
      const { zipCode, countryCode } = request
      const address = await this.searchAddressByZipcodeAndCountry.search(zipCode, countryCode)

      return ok(address)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace SearchAddressController {
  export type Request = {
    zipCode: string
    countryCode: string
  }
}
