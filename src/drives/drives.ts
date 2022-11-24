import { z } from 'zod';
import { driveSchema } from './schemas.js';
import { Drive } from './types.js';

export default class Drives {
  #apiKey: string;
  #ua: string;
  private readonly baseUrl = 'https://api.collegefootballdata.com';
  constructor(apiKey: string, ua: string) {
    this.#apiKey = apiKey;
    this.#ua = ua;
  }
  async get(options: z.infer<typeof driveSchema>): Promise<Drive[]> {
    const parsed = await driveSchema.parseAsync(options);
    const url = new URL(`${this.baseUrl}/drives`);
    for (const [key, value] of Object.entries(parsed)) {
      url.searchParams.append(key, value.toString());
    }
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + this.#apiKey,
        'User-Agent': this.#ua,
      },
    });
    const json = await response.json();
    return json;
  }
}
