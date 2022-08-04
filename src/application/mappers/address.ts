import { Address } from '@/domain/entities'
import { AddressModel } from '@/application/models'

export const modelToEntityAddressMapper = (
  addressModel: AddressModel
): Address => {
  return {
    postCode: addressModel['post code'],
    country: addressModel.country,
    countryCode: addressModel['country abbreviation'],
    /** Taking only the first result on places array */
    latitude: addressModel.places[0].latitude,
    longitude: addressModel.places[0].longitude,
    placeName: addressModel.places[0]['place name'],
    state: addressModel.places[0].state,
    stateCode: addressModel.places[0]['state abbreviation']
  }
}
