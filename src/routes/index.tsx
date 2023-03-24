import { component$, $ } from '@builder.io/qwik'
import Input from '~/components/chat/Input'
import ChatBox from '~/components/chat/ChatBox'
import { FetchOpenAIMessage } from '~/services/openai'


export default component$(() => {
  const handleOnSubmit = $(async (e: any) => {
    const $form = e.target as HTMLFormElement

    const { message } = Object.fromEntries(new FormData($form))

    if (!message) return

    $form.reset()

    const a = await FetchOpenAIMessage({
      message: message as string
    })

    console.log(a)
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
          <Input/>
        </form>
      </div>
    </div>
  )
})
