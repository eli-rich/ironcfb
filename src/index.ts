import Games from './games/games.js';
import * as dotenv from 'dotenv';
dotenv.config();

class IronCFB {
  #apiKey: string;
  #ua = 'IronCFB v0.0.1';
  public games: Games;
  constructor(apiKey: string) {
    this.#apiKey = apiKey;
    this.games = new Games(apiKey, this.#ua);
  }
}

const ironCFB = new IronCFB(process.env.CFB_KEY!);
const boxStats = await ironCFB.games.box({
  gameId: 401403943,
});

console.log(JSON.stringify(boxStats, null, 2));
