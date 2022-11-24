import { inspect } from 'util';
import { z } from 'zod';
import { playSchema } from './schemas.js';
import { Play } from './types.js';

export default class Plays {
  #apiKey: string;
  #ua: string;
  private readonly baseurl = 'https://api.collegefootballdata.com';
  constructor(apiKey: string, ua: string) {
    this.#apiKey = apiKey;
    this.#ua = ua;
  }
  async get(options: z.infer<typeof playSchema>): Promise<Play[]> {
    const parsed = await playSchema.parseAsync(options);
    const url = new URL(`${this.baseurl}/plays`);
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
