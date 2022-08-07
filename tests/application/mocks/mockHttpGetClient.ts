import { HttpGetClient, HttpGetParams, HttpResponse } from '@/application/contracts'
import { mockAddressModel } from '@/tests/application/models/mockAddress'

export class HttpGetClientSpy<T, R> implements HttpGetClient<T, R> {
  params: HttpGetParams<T>

  async get(params: HttpGetParams<T>): Promise<HttpResponse<R>> {
    this.params = params
    return {
      statusCode: 200,
      body: mockAddressModel as any
    }
  }
}
