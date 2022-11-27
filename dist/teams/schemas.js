import { z } from 'zod';
import { conferences } from '../shared.js';
export const teamSchema = z.object({
    conference: conferences.optional(),
});
export const fbsSchema = z.object({
    year: z.number().min(1900).max(2100).optional(),
});
export const rosterSchema = z.object({
    team: z.string().optional(),
    year: z.number().min(1900).max(2100).optional(),
});
export const talentSchema = z.object({
    year: z.number().min(1900).max(2100).optional(),
});
export const matchupSchema = z.object({
    team1: z.string(),
    team2: z.string(),
    minYear: z.number().min(1900).max(2100).optional(),
    maxYear: z.number().min(1900).max(2100).optional(),
});
//# sourceMappingURL=schemas.js.map