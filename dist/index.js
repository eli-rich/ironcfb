import Games from './games/games.js';
import * as dotenv from 'dotenv';
import Drives from './drives/drives.js';
import Plays from './plays/plays.js';
import Teams from './teams/teams.js';
import Conferences from './conferences/conferences.js';
dotenv.config();
class IronCFB {
    #apiKey;
    #ua = 'IronCFB v0.0.1';
    games;
    drives;
    plays;
    teams;
    conferences;
    constructor(apiKey) {
        this.#apiKey = apiKey;
        this.games = new Games(apiKey, this.#ua);
        this.drives = new Drives(apiKey, this.#ua);
        this.plays = new Plays(apiKey, this.#ua);
        this.teams = new Teams(apiKey, this.#ua);
        this.conferences = new Conferences(apiKey, this.#ua);
    }
}
const iron = new IronCFB(process.env.CFB_KEY);
const confs = await iron.conferences.get();
const abv = confs.map((c) => c.abbreviation);
console.log(abv);
//# sourceMappingURL=index.js.map