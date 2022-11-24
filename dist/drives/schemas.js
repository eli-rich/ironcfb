import { z } from 'zod';
export const driveSchema = z.object({
    seasonType: z.enum(['preseason', 'regular', 'postseason']).optional(),
    year: z.number().min(1900).max(2100),
    week: z.number().min(1).max(53).optional(),
    team: z.string().optional(),
    offense: z.string().optional(),
    defense: z.string().optional(),
    conference: z.string().optional(),
    offenseConference: z.string().optional(),
    defenseConference: z.string().optional(),
    classification: z.enum(['fbs', 'fcs', 'ii', 'iii']).optional(),
});
//# sourceMappingURL=schemas.js.map