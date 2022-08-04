import { HttpResponse } from '@/application/contracts/http'

export interface Controller<T = any> {
  handle: (request?: T) => Promise<HttpResponse>
}
