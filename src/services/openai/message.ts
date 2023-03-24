interface IFirstArg {
  message: string
}

const message = async ({
  message
}: IFirstArg) => {
  try {
    const fetching = await fetch(
      '/api/chat-gpt',
      {
        method: 'POST',
        body: JSON.stringify({ message }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    const data = await fetching.json()

    console.log(data)

  } catch (e: any) {
    console.log(e)
    console.log('openai/message.ts error')
    return { error: e?.message ?? 'Server Error Connection' }
  }
}

export default message