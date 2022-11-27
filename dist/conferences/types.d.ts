import { z } from 'zod';
import { classifications } from '../shared.js';
export interface Conference {
    id: number | null;
    name: string | null;
    short_name: string | null;
    abbreviation: string | null;
    classification: z.infer<typeof classifications> | null;
}
