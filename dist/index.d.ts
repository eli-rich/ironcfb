import { z } from 'zod';
import Games from './games/games.js';
import Drives from './drives/drives.js';
import Plays from './plays/plays.js';
import Teams from './teams/teams.js';
import Conferences from './conferences/conferences.js';
import Venues from './venues/venues.js';
declare const OptionSchema: z.ZodObject<{
    apiKey: z.ZodString;
    userAgent: z.ZodString;
}, "strip", z.ZodTypeAny, {
    apiKey: string;
    userAgent: string;
}, {
    apiKey: string;
    userAgent: string;
}>;
export default class IronCFB {
    #private;
    games: Games;
    drives: Drives;
    plays: Plays;
    teams: Teams;
    conferences: Conferences;
    venues: Venues;
    constructor(options: z.infer<typeof OptionSchema>);
}
export {};
