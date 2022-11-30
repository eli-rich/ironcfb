import { z } from 'zod';
import Games from './games/games.js';
import Drives from './drives/drives.js';
import Plays from './plays/plays.js';
import Teams from './teams/teams.js';
import Conferences from './conferences/conferences.js';
import Venues from './venues/venues.js';

const OptionSchema = z.object({
  apiKey: z.string(),
  userAgent: z.string(),
});

export default class IronCFB {
  #apiKey: string;
  #userAgent: string;
  public games: Games;
  public drives: Drives;
  public plays: Plays;
  public teams: Teams;
  public conferences: Conferences;
  public venues: Venues;
  constructor(options: z.infer<typeof OptionSchema>) {
    const parsedOption = OptionSchema.parse(options);
    this.#apiKey = parsedOption.apiKey;
    this.#userAgent = parsedOption.userAgent;
    this.games = new Games(this.#apiKey, this.#userAgent);
    this.drives = new Drives(this.#apiKey, this.#userAgent);
    this.plays = new Plays(this.#apiKey, this.#userAgent);
    this.teams = new Teams(this.#apiKey, this.#userAgent);
    this.conferences = new Conferences(this.#apiKey, this.#userAgent);
    this.venues = new Venues(this.#apiKey, this.#userAgent);
  }
}
