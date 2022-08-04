import { SearchAddressByZipcodeAndCountry } from '@/domain/usecases'
import { APIResponse, Controller, ok, serverError } from '@/presentation/contracts'
import { AddressViewModel } from '@/presentation/view-models'

export class SearchAddressController implements Controller {
  constructor(private readonly searchAddressByZipcodeAndCountry: SearchAddressByZipcodeAndCountry) {}

  async handle(request: SearchAddressController.Request): Promise<APIResponse<AddressViewModel>> {
    try {
      const { zipcode, country } = request
      const address = await this.searchAddressByZipcodeAndCountry.search(zipcode, country)

      return ok(address)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace SearchAddressController {
  export type Request = {
    zipcode: string
    country: string
  }
}
