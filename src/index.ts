import Games from './games/games.js';
import * as dotenv from 'dotenv';
import Drives from './drives/drives.js';
import Plays from './plays/plays.js';
dotenv.config();

class IronCFB {
  #apiKey: string;
  #ua = 'IronCFB v0.0.1';
  public games: Games;
  public drives: Drives;
  public plays: Plays;
  constructor(apiKey: string) {
    this.#apiKey = apiKey;
    this.games = new Games(apiKey, this.#ua);
    this.drives = new Drives(apiKey, this.#ua);
    this.plays = new Plays(apiKey, this.#ua);
  }
}

const ironCFB = new IronCFB(process.env.CFB_KEY!);
const plays = await ironCFB.plays.get({
  year: 2022,
  week: 11,
  team: 'Alabama',
  offense: 'Alabama',
});

console.log(JSON.stringify(plays, null, 2));
