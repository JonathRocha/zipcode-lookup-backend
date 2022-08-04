export type AddressModel = {
  'post code': string
  country: string
  'country abbreviation': string
  places: Place[]
}

type Place = {
  'place name': string
  longitude: string
  state: string
  'state abbreviation': string
  latitude: string
}
