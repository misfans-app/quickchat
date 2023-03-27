import { component$ } from '@builder.io/qwik'

interface Props {
  from: 'me' | 'him'
  content: string
}

export default component$(({
  from,
  content
}: Props) => {
  return (
    <div class={`flex gap-4 ${from === 'me' ? 'flex-row-reverse' : ''}`}>
      <div class="bg-indigo-400 min-w-[3.5rem] max-w-[3.5rem] min-h-[3.5rem] max-h-[3.5rem] rounded-full grid place-items-center">
        { from === 'me' ? 'Me' : 'GPT' }
      </div>

      <div class="p-4 max-w-xl border border-gray-300 rounded-lg">
        {content}
      </div>
    </div>
  )
})