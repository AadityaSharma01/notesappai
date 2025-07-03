import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from parent directory reliably
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import Cerebras from '@cerebras/cerebras_cloud_sdk';

const apiKey = process.env.CEREBRAS_API_KEY;

if (!apiKey) {
  throw new Error('CEREBRAS_API_KEY not found in .env file');
}

// Single, secure client
const client = new Cerebras(apiKey);

// Generate AI title
const aicomponenttitle = async (input) => {
  try {
    const completionCreateResponse = await client.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `${input}\n\nGIVE ME A NICE 2 TO 8 WORD TITLE DEPENDING ON HOW BIG THE CONTENT ABOVE IS. JUST THE TITLE, NOTHING ELSE.`,
        },
      ],
      model: 'llama-4-scout-17b-16e-instruct',
    });

    return completionCreateResponse.choices[0].message.content;
  } catch (error) {
    console.error("AI Title Error:", error);
    throw error;
  }
};

export default aicomponenttitle;

// Generate AI summary
export const aicomponentsummmary = async (input) => {
  try {
    const completionCreateResponsesummary = await client.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `${input}\n\nSummarize the content above in 2 to 4 concise sentences. Do not add anything else.`,
        },
      ],
      model: 'llama-4-scout-17b-16e-instruct',
    });

    return completionCreateResponsesummary.choices[0].message.content;
  } catch (error) {
    console.error("AI Summary Error:", error);
    throw error;
  }
};
