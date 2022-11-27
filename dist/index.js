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
const ironCFB = new IronCFB(process.env.CFB_KEY);
const teams = await ironCFB.teams.get({ conference: 'SEC' });
teams.forEach((team) => {
    console.log(team.school);
    console.log(team.twitter);
    console.log(team.mascot);
    console.log('\n');
});
//# sourceMappingURL=index.js.map