import { z } from 'zod';
import { coachOptions } from './schemas.js';
import { Coach } from './types.js';
export default class Coaches {
    #private;
    private readonly baseurl;
    constructor(apiKey: string, ua: string);
    get(options: z.infer<typeof coachOptions>): Promise<Coach[]>;
}
