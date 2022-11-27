import { z } from 'zod';
import { fbsSchema, teamSchema } from './schemas.js';
import { FBSTeam, Team } from './types.js';

export default class Teams {
  #apiKey: string;
  #ua: string;
  private readonly baseurl = 'https://api.collegefootballdata.com';
  constructor(apiKey: string, ua: string) {
    this.#apiKey = apiKey;
    this.#ua = ua;
  }
  async get(options: z.infer<typeof teamSchema>): Promise<Team[]> {
    const url = new URL(`${this.baseurl}/teams`);
    for (const [key, value] of Object.entries(options)) {
      url.searchParams.append(key, value);
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

  async fbs(options: z.infer<typeof fbsSchema>): Promise<FBSTeam[]> {
    const url = new URL(`${this.baseurl}/teams/fbs`);
    for (const [key, value] of Object.entries(options)) {
      url.searchParams.append(key, value.toString());
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
