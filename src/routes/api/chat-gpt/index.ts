import type { RequestHandler } from '@builder.io/qwik-city'
import { z } from '@builder.io/qwik-city'

const zodBody = z.object({
  messages: z.array(z.string().min(1))
})

const API_KEY = "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"

export const onPost: RequestHandler = async (ctx) => {
  const body = await ctx.parseBody()

  try {
    const { messages } = zodBody.parse(body)

    const mapMessages = messages.map((message) => ({
      role: 'user',
      content: message
    }))

    const messagesToSend = [
      {
        role: 'system',
        content: ''
      },
      ...mapMessages
    ]

    const fetching = await fetch(
      'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: messagesToSend,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      }
    )

    const data = await fetching.json()

    ctx.json(200, {
      data: data.choices[0].message.content
    })

  } catch (e: any) {
    ctx.json(500, { message: e?.message ?? 'Server Internal Error' })
  }
}