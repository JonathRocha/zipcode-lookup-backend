import { HttpResponse, HttpStatusCode } from '@/application/contracts'

export type APIResponse<T = any> = HttpResponse<T>

export const ok = (body: any): APIResponse => ({
  statusCode: HttpStatusCode.ok,
  body
})

export const serverError = (error: Error): APIResponse => ({
  statusCode: HttpStatusCode.serverError,
  body: error instanceof Error ? error.stack : 'Unexpected error'
})
