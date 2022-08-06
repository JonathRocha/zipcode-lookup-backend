import { Address } from '@/domain/entities'

export interface SearchAddressByZipcodeAndCountry {
  search: (zipCode: string, countryCode: string) => Promise<Address | undefined>
}
