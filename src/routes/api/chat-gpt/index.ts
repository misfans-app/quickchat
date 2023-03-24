import type { RequestHandler } from '@builder.io/qwik-city'

export const onPost: RequestHandler = async (ctx) => {
  const body = await ctx.parseBody()

  console.log(body)

  ctx.json(200, { message: 'hola' })
}