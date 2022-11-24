import { z } from 'zod';
import { driveSchema } from './schemas.js';
import { Drive } from './types.js';
export default class Drives {
    #private;
    private readonly baseUrl;
    constructor(apiKey: string, ua: string);
    get(options: z.infer<typeof driveSchema>): Promise<Drive[]>;
}
