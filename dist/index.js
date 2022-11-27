import Games from './games/games.js';
import * as dotenv from 'dotenv';
import Drives from './drives/drives.js';
import Plays from './plays/plays.js';
import Teams from './teams/teams.js';
dotenv.config();
class IronCFB {
    #apiKey;
    #ua = 'IronCFB v0.0.1';
    games;
    drives;
    plays;
    teams;
    constructor(apiKey) {
        this.#apiKey = apiKey;
        this.games = new Games(apiKey, this.#ua);
        this.drives = new Drives(apiKey, this.#ua);
        this.plays = new Plays(apiKey, this.#ua);
        this.teams = new Teams(apiKey, this.#ua);
    }
}
const iron = new IronCFB(process.env.CFB_KEY);
const players = await iron.teams.roster({
    team: 'Alabama',
    year: 2022,
});
const bamaBoys = players.filter((player) => player.home_state === 'AL');
console.log(bamaBoys);
//# sourceMappingURL=index.js.map