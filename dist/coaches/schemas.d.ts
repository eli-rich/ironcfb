import { z } from 'zod';
export declare const coachOptions: z.ZodObject<{
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    team: z.ZodOptional<z.ZodString>;
    year: z.ZodOptional<z.ZodNumber>;
    minYear: z.ZodOptional<z.ZodNumber>;
    maxYear: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    year?: number | undefined;
    team?: string | undefined;
    minYear?: number | undefined;
    maxYear?: number | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
}, {
    year?: number | undefined;
    team?: string | undefined;
    minYear?: number | undefined;
    maxYear?: number | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
}>;
