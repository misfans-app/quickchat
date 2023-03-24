interface IFirstArg {
  messages: string[]
}

const message = async ({
  messages
}: IFirstArg) => {
  try {
    const fetching = await fetch(
      '/api/chat-gpt',
      {
        method: 'POST',
        body: JSON.stringify({ messages }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    const data = await fetching.json()

    if (typeof data.message === 'string') return { error: data.message }

    return {
      data: data.data as string
    }
  } catch (e: any) {
    console.log(e)
    console.log('openai/message.ts error')
    return { error: e?.message ?? 'Server Error Connection' }
  }
}

export default message