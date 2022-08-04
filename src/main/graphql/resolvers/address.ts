import { makeSearchAddressController } from '@/main/factories/searchAddressController'
import { adaptResolver } from '@/main/adapters'

export default {
  Query: {
    searchAddress: async (_parent: unknown, args: any) => adaptResolver(makeSearchAddressController(), args)
  }
}
