import { component$, Slot } from '@builder.io/qwik'

export default component$(() => {
  return (
    <main class="max-w-screen-lg mx-auto">
      <Slot/>
    </main>
  )
})