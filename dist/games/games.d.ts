import { z } from 'zod';
import { advancedSchema, calendarSchema, gamesSchema, mediaSchema, playersSchema, recordsSchema, teamsSchema } from './schemas.js';
import { Box, Game, Media, PlayerStats, TeamRecord, TeamStats, Week } from './types.js';
export default class Games {
    #private;
    private readonly baseUrl;
    constructor(apiKey: string, ua: string);
    get(options: z.infer<typeof gamesSchema>): Promise<Game[]>;
    records(options: z.infer<typeof recordsSchema>): Promise<TeamRecord[]>;
    calendar(options: z.infer<typeof calendarSchema>): Promise<Week[]>;
    media(options: z.infer<typeof mediaSchema>): Promise<Media[]>;
    player(options: z.infer<typeof playersSchema>): Promise<PlayerStats[]>;
    team(options: z.infer<typeof teamsSchema>): Promise<TeamStats>;
    box(options: z.infer<typeof advancedSchema>): Promise<Box>;
}
