import { Controller } from '@/presentation/contracts'

export const adaptResolver = async (controller: Controller, args?: any): Promise<unknown> => {
  const httpResponse = await controller.handle(args ? args.input : undefined)
  return httpResponse.body
}
