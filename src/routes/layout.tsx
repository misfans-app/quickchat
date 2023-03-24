import { component$, Slot } from '@builder.io/qwik'

export default component$(() => {
  return (
    <main class="max-w-screen-lg mx-auto py-4">
      <Slot/>
    </main>
  )
})