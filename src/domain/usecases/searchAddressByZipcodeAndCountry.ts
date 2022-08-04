import { Address } from '@/domain/entities'

export interface SearchAddressByZipcodeAndCountry {
  search: (zipCode: string, country: string) => Promise<Address | undefined>
}
