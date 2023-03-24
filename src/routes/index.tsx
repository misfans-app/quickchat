import { component$ } from '@builder.io/qwik'
import Input from '~/components/chat/Input'
import ChatBox from '~/components/chat/ChatBox'

export default component$(() => {
  return (
    <div>
      <Input />
      <ChatBox />
    </div>
  )
})
