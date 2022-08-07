import { SearchAddressByZipcodeAndCountryService } from '@/application/services'
import { HttpGetClientSpy } from '@/tests/application/mocks/mockHttpGetClient'
import { AddressModel } from '@/application/models'

type SutTypes = {
  sut: SearchAddressByZipcodeAndCountryService
  httpGetClientSpy: HttpGetClientSpy<never, AddressModel>
}

const makeSut = (): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<never, AddressModel>()
  const sut = new SearchAddressByZipcodeAndCountryService(httpGetClientSpy)
  return {
    sut,
    httpGetClientSpy
  }
}

describe('SearchAddressByZipcodeAndCountryService Application Service', () => {
  it('Should call HttpGetClient with correct values', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    await sut.search('12345678', 'BR')
    expect(httpGetClientSpy.params).toEqual({ url: 'https://api.zippopotam.us/br/12345678' })
  })
})
