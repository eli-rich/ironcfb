import { z } from 'zod';
export const coachOptions = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    team: z.string().optional(),
    year: z.number().min(1900).max(2100).optional(),
    minYear: z.number().min(1900).max(2100).optional(),
    maxYear: z.number().min(1900).max(2100).optional(),
});
//# sourceMappingURL=schemas.js.map