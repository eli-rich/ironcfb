import { z } from 'zod';
import { playSchema, playStatSchema } from './schemas.js';
import { Play, PlayType, StatPlay, TypeStat } from './types.js';
export default class Plays {
    #private;
    private readonly baseurl;
    constructor(apiKey: string, ua: string);
    get(options: z.infer<typeof playSchema>): Promise<Play[]>;
    types(): Promise<PlayType[]>;
    stats(options: z.infer<typeof playStatSchema>): Promise<StatPlay[]>;
    statTypes(): Promise<TypeStat[]>;
}
