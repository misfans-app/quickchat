import { component$, $ } from '@builder.io/qwik'
import { Form } from '@builder.io/qwik-city'
import Input from '~/components/chat/Input'
import ChatBox from '~/components/chat/ChatBox'


export default component$(() => {
  const handleOnSubmit = $((e: any) => {
    e.preventDefault()

    const { message } = Object.fromEntries(new FormData(e.currentTarget))

    if (!message) return

    console.log(message)

  })

  return (
    <div class="h-screen flex items-end pb-8">
      <div class="w-full flex flex-col gap-8">
        <div class="max-h-[calc(100vh-8rem)] overflow-y-scroll">
          <ChatBox/>
        </div>
        
        <Form preventdefault:submit onSubmit$={handleOnSubmit}>
          <Input/>
        </Form>
      </div>
    </div>
  )
})
