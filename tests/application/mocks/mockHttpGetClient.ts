import { HttpGetClient, HttpGetParams, HttpResponse } from '@/application/contracts'

export class HttpGetClientSpy<T, R> implements HttpGetClient<T, R> {
  params: HttpGetParams<T>

  async get(params: HttpGetParams<T>): Promise<HttpResponse<R>> {
    this.params = params
    return {
      statusCode: 200,
      body: {
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
      } as any
    }
  }
}
