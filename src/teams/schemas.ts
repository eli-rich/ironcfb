import { z } from 'zod';
import { conferences } from '../shared.js';

export const teamSchema = z.object({
  conference: conferences.optional(),
});

export const fbsSchema = z.object({
  year: z.number().min(1900).max(2100).optional(),
});
