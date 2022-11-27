import Games from './games/games.js';
import * as dotenv from 'dotenv';
import Drives from './drives/drives.js';
import Plays from './plays/plays.js';
import Teams from './teams/teams.js';
import Conferences from './conferences/conferences.js';
dotenv.config();

class IronCFB {
  #apiKey: string;
  #ua = 'IronCFB v0.0.1';
  public games: Games;
  public drives: Drives;
  public plays: Plays;
  public teams: Teams;
  public conferences: Conferences;
  constructor(apiKey: string) {
    this.#apiKey = apiKey;
    this.games = new Games(apiKey, this.#ua);
    this.drives = new Drives(apiKey, this.#ua);
    this.plays = new Plays(apiKey, this.#ua);
    this.teams = new Teams(apiKey, this.#ua);
    this.conferences = new Conferences(apiKey, this.#ua);
  }
}
