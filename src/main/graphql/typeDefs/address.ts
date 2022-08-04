import { gql } from 'apollo-server-express'

export default gql`
  type Address {
    postCode: String
    country: String
    countryCode: String
    placeName: String
    longitude: String
    latitude: String
    state: String
    stateCode: String
  }

  input SearhcAddressInput {
    zipcode: String!
    country: String!
  }

  type Query {
    searchAddress(input: SearhcAddressInput!): Address
  }
`
