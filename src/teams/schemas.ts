import { z } from 'zod';

export const teamSchema = z.object({
  conference: z.string().optional(),
});
