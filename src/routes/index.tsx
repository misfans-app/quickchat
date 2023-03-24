import { component$, $, useSignal } from '@builder.io/qwik'
import Input from '~/components/chat/Input'
import ChatBox from '~/components/chat/ChatBox'
import { FetchOpenAIMessage } from '~/services/openai'


export default component$(() => {
  const loading = useSignal<boolean>(false)

  const handleOnSubmit = $(async (e: any) => {
    if (loading.value) return

    const $form = e.target as HTMLFormElement

    const { message } = Object.fromEntries(new FormData($form))

    if (!message) return

    loading.value = true

    const { error, data } = await FetchOpenAIMessage({
      messages: [message as string]
    })

    loading.value = false

    if (typeof error === 'string') {
      console.log(error)
      return
    }

    $form.reset()

    console.log(data)
  })

  return (
    <div class="h-screen flex items-end pb-8">
      <div class="w-full flex flex-col gap-8">
        <div class="max-h-[calc(100vh-8rem)] overflow-y-scroll">
          <ChatBox/>
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
