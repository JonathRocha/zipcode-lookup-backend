import { SearchAddressByZipcodeAndCountryService } from '@/application/services'
import { SearchAddressController } from '@/presentation/controllers'
import { AxiosHttpClient } from '@/infra/http'
import { Controller } from '@/presentation/contracts'

export const makeSearchAddressController = (): Controller => {
  const axiosClient = new AxiosHttpClient()
  const service = new SearchAddressByZipcodeAndCountryService(axiosClient)
  const controller = new SearchAddressController(service)

  return controller
}
