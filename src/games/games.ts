import { z } from 'zod';
import {
  advancedSchema,
  calendarSchema,
  gamesSchema,
  mediaSchema,
  playersSchema,
  recordsSchema,
  teamsSchema,
} from './schemas.js';
import { Box, Game, Media, PlayerStats, TeamRecord, TeamStats, Week } from './types.js';
export default class Games {
  #apiKey: string;
  #ua: string;
  private readonly baseUrl = 'https://api.collegefootballdata.com';
  constructor(apiKey: string, ua: string) {
    this.#apiKey = apiKey;
    this.#ua = ua;
  }
  async get(options: z.infer<typeof gamesSchema>): Promise<Game[]> {
    const parsed = await gamesSchema.parseAsync(options);
    const url = new URL(this.baseUrl + '/games');
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

  async records(options: z.infer<typeof recordsSchema>): Promise<TeamRecord[]> {
    const parsed = await recordsSchema.parseAsync(options);
    const url = new URL(this.baseUrl + '/records');
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

  async calendar(options: z.infer<typeof calendarSchema>): Promise<Week[]> {
    const parsed = await calendarSchema.parseAsync(options);
    const url = new URL(this.baseUrl + '/calendar');
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
    const fixed = [];
    // api incorrectly returns season as a string
    // the documentation specifies it should be a number
    for (const week of json) {
      const fixedWeek = { ...week, season: parseInt(week.season) };
      fixed.push(fixedWeek);
    }
    return fixed;
  }

  async media(options: z.infer<typeof mediaSchema>): Promise<Media[]> {
    const parsed = await mediaSchema.parseAsync(options);
    const url = new URL(this.baseUrl + '/games/media');
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

  async player(options: z.infer<typeof playersSchema>): Promise<PlayerStats[]> {
    const parsed = await playersSchema.parseAsync(options);
    const url = new URL(this.baseUrl + '/games/players');
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

  async team(options: z.infer<typeof teamsSchema>): Promise<TeamStats> {
    const parsed = await teamsSchema.parseAsync(options);
    const url = new URL(this.baseUrl + '/games/teams');
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

  async box(options: z.infer<typeof advancedSchema>): Promise<Box> {
    const parsed = await advancedSchema.parseAsync(options);
    const url = new URL(this.baseUrl + '/game/box/advanced');
    for (const [key, value] of Object.entries(parsed)) {
      url.searchParams.append(key, value.toString());
    }
    console.log(url.toString());
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
