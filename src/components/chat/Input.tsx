import { component$, $, useSignal } from '@builder.io/qwik'
import { HiArrowRightCircle } from '@qwikest/icons/heroicons'
import styles from './input.module.scss'

export default component$(() => {
  const hasText = useSignal<boolean>(false)

  const handleOnInput = $((e: any) => {
    const { value } = e.target

    hasText.value = value !== ''
  })

  return (
    <label class="flex border border-gray-300 rounded-full overflow-hidden shadow text-gray-400">
      <input
        class="bg-transparent w-full px-4 py-2 focus:outline-none"
        type="text"
        placeholder="Type a message"
        name="message"
        onInput$={handleOnInput}
      />

      <div class={`min-w-[2.5rem] max-w-[2.5rem] min-h-[2.5rem] max-h-[2.5rem] grid place-items-center pr-4 relative ${hasText.value ? 'text-blue-400' : ''}`}>
        <HiArrowRightCircle class="w-8 h-8"/>
        {
          hasText.value && (
            <div class={`absolute inset-0 rounded-full ${styles.animate_ping}`}>
              <div>
              </div>
            </div>
          )
        }
      </div>
    </label>
  )
})