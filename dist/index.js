import Games from './games/games.js';
import * as dotenv from 'dotenv';
dotenv.config();
class IronCFB {
    #apiKey;
    #ua = 'IronCFB v0.0.1';
    games;
    constructor(apiKey) {
        this.#apiKey = apiKey;
        this.games = new Games(apiKey, this.#ua);
    }
}
const ironCFB = new IronCFB(process.env.CFB_KEY);
const boxStats = await ironCFB.games.box({
    gameId: 401403943,
});
console.log(JSON.stringify(boxStats, null, 2));
//# sourceMappingURL=index.js.map