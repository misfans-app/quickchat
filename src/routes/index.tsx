import { component$, $, useSignal } from '@builder.io/qwik'
import Input from '~/components/chat/Input'
import { FetchOpenAIMessage } from '~/services/openai'
import Message from '~/components/Message'

interface IMessage {
  from: 'me' | 'him'
  content: string
}

export default component$(() => {
  const loading = useSignal<boolean>(false)
  const messages = useSignal<IMessage[]>([])

  const handleOnSubmit = $(async (e: any) => {
    if (loading.value) return

    const $form = e.target as HTMLFormElement

    const { message } = Object.fromEntries(new FormData($form))

    if (!message) return

    loading.value = true

    $form.reset()

    messages.value.push({
      from: 'me',
      content: message as string
    })

    const { error, data } = await FetchOpenAIMessage({
      messages: [message as string]
    })

    loading.value = false

    if (typeof error === 'string') {
      console.log(error)
      return
    }

    messages.value.push({
      from: 'him',
      content: data as string
    })
  })

  return (
    <div class="h-screen flex items-end pb-8">
      <div class="w-full flex flex-col gap-8">
        <div class="max-h-[calc(100vh-8rem)] overflow-y-auto flex flex-col gap-8 px-4">
          {
            messages.value.map((message, index) => (
              <Message
                key={index}
                {...message}
              />
            ))
          }

          {
            loading.value && (
              <Message
                from="him"
                content="Typing..."
              />
            )
          }
        </div>
        
        <form
          preventdefault:submit
          onSubmit$={handleOnSubmit}
        >
          <Input disabled={loading.value}/>
        </form>
      </div>
    </div>
  )
})
