import { z } from 'zod';
import Games from './games/games.js';
import Drives from './drives/drives.js';
import Plays from './plays/plays.js';
import Teams from './teams/teams.js';
import Conferences from './conferences/conferences.js';
import Venues from './venues/venues.js';
import Coaches from './coaches/coaches.js';
import * as dotenv from 'dotenv';
dotenv.config();
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
    venues;
    coaches;
    constructor(options) {
        const parsedOption = OptionSchema.parse(options);
        this.#apiKey = parsedOption.apiKey;
        this.#userAgent = parsedOption.userAgent;
        this.games = new Games(this.#apiKey, this.#userAgent);
        this.drives = new Drives(this.#apiKey, this.#userAgent);
        this.plays = new Plays(this.#apiKey, this.#userAgent);
        this.teams = new Teams(this.#apiKey, this.#userAgent);
        this.conferences = new Conferences(this.#apiKey, this.#userAgent);
        this.venues = new Venues(this.#apiKey, this.#userAgent);
        this.coaches = new Coaches(this.#apiKey, this.#userAgent);
    }
}
const iron = new IronCFB({
    apiKey: process.env.CFB_KEY,
    userAgent: 'IronCFB',
});
const coaches = await iron.coaches.get({
    team: 'Alabama',
    year: 2020,
});
console.log(JSON.stringify(coaches, null, 2));
coaches.forEach((coach) => {
    console.log(`${coach.first_name} ${coach.last_name}`);
    console.log(`Hired: ${coach.hire_date}`);
    for (const season of coach.seasons) {
        console.log(`  ${season.school} ${season.year}`);
        console.log(`  Wins: ${season.wins}`);
    }
    console.log();
});
//# sourceMappingURL=index.js.map