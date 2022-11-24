import { z } from 'zod';
import { playSchema } from './schemas.js';
import { Play } from './types.js';
export default class Plays {
    #private;
    private readonly baseurl;
    constructor(apiKey: string, ua: string);
    get(options: z.infer<typeof playSchema>): Promise<Play[]>;
}
