import { z } from 'zod';
import { teamSchema } from './schemas.js';
import { Team } from './types.js';
export default class Teams {
    #private;
    private readonly baseurl;
    constructor(apiKey: string, ua: string);
    get(options: z.infer<typeof teamSchema>): Promise<Team[]>;
}
