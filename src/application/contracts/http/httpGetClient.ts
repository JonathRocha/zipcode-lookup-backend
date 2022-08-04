import { HttpResponse } from '.'

export type HttpGetParams<T> = {
  url: string
  query?: T
}

export interface HttpGetClient<T, R> {
  get: (params: HttpGetParams<T>) => Promise<HttpResponse<R>>
}
