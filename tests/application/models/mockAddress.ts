import { AddressModel } from '@/application/models'

export const mockAddressModel: AddressModel = {
  'post code': '12345678',
  country: 'Brazil',
  'country abbreviation': 'BR',
  places: [
    {
      'place name': 'place name',
      'state abbreviation': 'state abbreviation',
      state: 'state',
      latitude: 'latitude',
      longitude: 'longitude'
    }
  ]
}
