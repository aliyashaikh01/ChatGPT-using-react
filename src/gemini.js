// const apiKey = "AIzaSyBICwnmUPhRU1aR3ZZuzjRZPNtWvkVl8KM";

// import { GoogleGenAI } from '@google/genai';

// async function main(prompt) {
//   const ai = new GoogleGenAI({ apiKey });

//   const config = {
//     thinkingConfig: {
//       thinkingBudget: -1,
//     },
//     responseMimeType: 'text/plain',
//   };

//   const contents = [
//     {
//       role: 'user',
//       parts: [{ text: prompt }],
//     },
//   ];

//   const response = await ai.models.generateContentStream({
//     model: 'gemini-2.5-pro',
//     config,
//     contents,
//   });

//   let fullResponse = '';
//   for await (const chunk of response) {
//     const text = chunk.text();
//     console.log(text);
//     fullResponse += text;
//   }

//   return fullResponse;
// }

// main("Explain how AI works in simple terms.");
// export default main;

import { GoogleGenAI } from '@google/genai';

const apiKey = "AIzaSyBICwnmUPhRU1aR3ZZuzjRZPNtWvkVl8KM"; // Never expose this directly in frontend production apps

async function main(prompt) {
  const ai = new GoogleGenAI({ apiKey });

  const model = 'gemini-2.5-pro';

  const contents = [
    {
      role: 'user',
      parts: [{ text: prompt }],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    contents,
    config: {
      responseMimeType: 'text/plain',
    },
  });

  let fullResponse = '';

  for await (const chunk of response) {
    const text = chunk?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (text) {
      console.log(text);
      fullResponse += text;
    }
  }

  return fullResponse;
}

export default main;
