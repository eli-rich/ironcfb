import { z } from 'zod';
import Games from './games/games.js';
import Drives from './drives/drives.js';
import Plays from './plays/plays.js';
import Teams from './teams/teams.js';
import Conferences from './conferences/conferences.js';
const OptionSchema = z.object({
    apiKey: z.string(),
    userAgent: z.string(),
});
export default class IronCFB {
    #apiKey;
    #userAgent;
    games;
    drives;
    plays;
    teams;
    conferences;
    constructor(options) {
        const parsedOption = OptionSchema.parse(options);
        this.#apiKey = parsedOption.apiKey;
        this.#userAgent = parsedOption.userAgent;
        this.games = new Games(this.#apiKey, this.#userAgent);
        this.drives = new Drives(this.#apiKey, this.#userAgent);
        this.plays = new Plays(this.#apiKey, this.#userAgent);
        this.teams = new Teams(this.#apiKey, this.#userAgent);
        this.conferences = new Conferences(this.#apiKey, this.#userAgent);
    }
}
//# sourceMappingURL=index.js.map