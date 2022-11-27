import { z } from 'zod';
import { conferences } from '../shared.js';

export const teamSchema = z.object({
  conference: conferences.optional(),
});

export const fbsSchema = z.object({});
