import { component$ } from '@builder.io/qwik'
// import { useTask$ } from '@builder.io/qwik';

// function generateResponse() {
//       const prompt = 'Hola, ¿cómo estás?';
//       const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';
//       const apiKey = 'xd'; // Reemplaza TU_CLAVE_API con tu propia clave API

//       fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${apiKey}`,
//         },
//         body: JSON.stringify({
//           prompt,
//           max_tokens: 60,
//           n: 1,
//           stop: '\n',
//         }),
//       })
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           // const message = data.choices[0].text.trim();
//           // console.log(message);
//           // Aquí puedes mostrar la respuesta en la pantalla
//         })
//         .catch(error => console.log(error));
//     }

export default component$(() => {

    // useTask$(async () => {
    //     generateResponse();
    // });

  return (
    <div>
        Example
    </div>
  )
})