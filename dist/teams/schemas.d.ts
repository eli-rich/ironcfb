import { z } from 'zod';
export declare const teamSchema: z.ZodObject<{
    conference: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    conference?: string | undefined;
}, {
    conference?: string | undefined;
}>;
