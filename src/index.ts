import Games from './games/games.js';
import * as dotenv from 'dotenv';
import Drives from './drives/drives.js';
import Plays from './plays/plays.js';
import Teams from './teams/teams.js';
dotenv.config();

class IronCFB {
  #apiKey: string;
  #ua = 'IronCFB v0.0.1';
  public games: Games;
  public drives: Drives;
  public plays: Plays;
  public teams: Teams;
  constructor(apiKey: string) {
    this.#apiKey = apiKey;
    this.games = new Games(apiKey, this.#ua);
    this.drives = new Drives(apiKey, this.#ua);
    this.plays = new Plays(apiKey, this.#ua);
    this.teams = new Teams(apiKey, this.#ua);
  }
}

const iron = new IronCFB(process.env.CFB_KEY!);
const players = await iron.teams.roster({
  team: 'Alabama',
  year: 2022,
});

const bamaBoys = players.filter((player) => player.home_state === 'AL');

console.log(bamaBoys);
