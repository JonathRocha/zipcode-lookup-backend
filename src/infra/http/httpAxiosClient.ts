import axios from 'axios'
import { HttpGetClient, HttpResponse, HttpGetParams } from '@/application/contracts/http'

export class AxiosHttpClient implements HttpGetClient<any, any> {
  async get(params: HttpGetParams<unknown>): Promise<HttpResponse<any>> {
    const { url } = params

    const response = await axios.get(url)

    return {
      statusCode: response.status,
      body: response.data
    }
  }
}
