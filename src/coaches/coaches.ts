import { z } from 'zod';
import { coachOptions } from './schemas.js';
import { Coach } from './types.js';

export default class Coaches {
  #apiKey: string;
  #ua: string;
  private readonly baseurl = 'https://api.collegefootballdata.com';
  constructor(apiKey: string, ua: string) {
    this.#apiKey = apiKey;
    this.#ua = ua;
  }
  async get(options: z.infer<typeof coachOptions>): Promise<Coach[]> {
    const url = new URL(`${this.baseurl}/coaches`);
    for (const [key, value] of Object.entries(options)) {
      if (value) {
        url.searchParams.append(key, value.toString());
      }
    }
    const response = await fetch(url.toString(), {
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
