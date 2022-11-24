import { z } from 'zod';
import { playSchema, playStatSchema } from './schemas.js';
import { Play, PlayType, StatPlay, TypeStat } from './types.js';

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

  async types(): Promise<PlayType[]> {
    const url = new URL(`${this.baseurl}/play/types`);
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
  async stats(options: z.infer<typeof playStatSchema>): Promise<StatPlay[]> {
    const parsed = await playStatSchema.parseAsync(options);
    const url = new URL(`${this.baseurl}/play/stats`);
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

  async statTypes(): Promise<TypeStat[]> {
    const url = new URL(`${this.baseurl}/play/stat/types`);
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
