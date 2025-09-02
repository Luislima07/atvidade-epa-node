// Please install OpenAI SDK first: `npm install openai`

import OpenAI from "openai";
SYSTEM_PROMPT = 'Você é um assistente útil, pronto para ajudar com dúvidas sobre programação e tecnologia.';

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: 'sk-aef367ccef2643eaa3e403275e9e5a68'
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "deepseek-chat",
  });

  console.log(completion.choices[0].message.content);
}

main();