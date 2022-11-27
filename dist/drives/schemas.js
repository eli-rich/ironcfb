import { z } from 'zod';
import { conferences, divisions } from '../shared.js';
export const driveSchema = z.object({
    seasonType: z.enum(['preseason', 'regular', 'postseason']).optional(),
    year: z.number().min(1900).max(2100),
    week: z.number().min(1).max(53).optional(),
    team: z.string().optional(),
    offense: z.string().optional(),
    defense: z.string().optional(),
    conference: conferences.optional(),
    offenseConference: conferences.optional(),
    defenseConference: conferences.optional(),
    classification: divisions.optional(),
});
//# sourceMappingURL=schemas.js.map