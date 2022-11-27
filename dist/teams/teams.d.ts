import { z } from 'zod';
import { fbsSchema, rosterSchema, teamSchema, talentSchema, matchupSchema } from './schemas.js';
import { FBSTeam, Matchup, Player, Talent, Team } from './types.js';
export default class Teams {
    #private;
    private readonly baseurl;
    constructor(apiKey: string, ua: string);
    get(options: z.infer<typeof teamSchema>): Promise<Team[]>;
    fbs(options: z.infer<typeof fbsSchema>): Promise<FBSTeam[]>;
    roster(options: z.infer<typeof rosterSchema>): Promise<Player[]>;
    talent(options: z.infer<typeof talentSchema>): Promise<Talent[]>;
    matchup(options: z.infer<typeof matchupSchema>): Promise<Matchup>;
}
