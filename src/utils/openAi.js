import OpenAI from 'openai';
import { openAiApiKey } from './constants';

const client = new OpenAI({
  apiKey: openAiApiKey, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default client;