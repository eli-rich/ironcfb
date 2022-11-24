import { z } from 'zod';
export const gamesSchema = z.object({
    year: z.number().min(1900).max(2100),
    week: z.number().min(1).max(53).optional(),
    seasonType: z.enum(['regular', 'postseason']).optional(),
    team: z.string().optional(),
    home: z.string().optional(),
    away: z.string().optional(),
    conference: z.string().optional(),
    division: z.string().optional(),
    id: z.number().optional(),
});
export const recordsSchema = z.object({
    year: z.number().min(1900).max(2100).optional(),
    team: z.string().optional(),
    conference: z.string().optional(),
});
export const calendarSchema = z.object({
    year: z.number().min(1900).max(2100).optional(),
});
export const mediaSchema = z.object({
    year: z.number().min(1900).max(2100),
    week: z.number().min(1).max(53).optional(),
    seasonType: z.enum(['regular', 'postseason', 'both']).optional(),
    team: z.string().optional(),
    conference: z.string().optional(),
    mediaType: z.enum(['tv', 'radio', 'web', 'ppv', 'mobile']).optional(),
    classification: z.enum(['fbs', 'fcs', 'ii', 'iii']).optional(),
});
export const playersSchema = z.object({
    year: z.number().min(1900).max(2100),
    week: z.number().min(1).max(53).optional(),
    seasonType: z.enum(['regular', 'postseason']).optional(),
    team: z.string().optional(),
    conference: z.string().optional(),
    category: z.string().optional(),
    gameId: z.number().optional(),
});
export const teamsSchema = z.object({
    year: z.number().min(1900).max(2100),
    week: z.number().min(1).max(53).optional(),
    seasonType: z.enum(['regular', 'postseason']).optional(),
    team: z.string().optional(),
    conference: z.string().optional(),
    gameId: z.number().optional(),
    classification: z.enum(['fbs', 'fcs', 'ii', 'iii']).optional(),
});
export const advancedSchema = z.object({
    gameId: z.number(),
});
//# sourceMappingURL=schemas.js.map