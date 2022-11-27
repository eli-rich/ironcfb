import { z } from 'zod';
import { conferences, divisions } from '../shared.js';

export const playSchema = z.object({
  seasonType: z.enum(['regular', 'postseason']).optional(),
  year: z.number().min(1900).max(2100),
  week: z.number().min(1).max(52),
  team: z.string().optional(),
  offense: z.string().optional(),
  defense: z.string().optional(),
  conference: conferences.optional(),
  offenseConference: conferences.optional(),
  defenseConference: conferences.optional(),
  playType: z.number().optional(),
  classification: divisions.optional(),
});

export const playStatSchema = z.object({
  year: z.number().min(1900).max(2100).optional(),
  week: z.number().min(1).max(52).optional(),
  team: z.string().optional(),
  gameId: z.number().optional(),
  athleteId: z.number().optional(),
  statTypeId: z.number().optional(),
  seasonType: z.enum(['regular', 'postseason', 'both']).optional(),
  conference: conferences.optional(),
});
