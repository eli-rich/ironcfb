import { z } from 'zod';
export declare const teamSchema: z.ZodObject<{
    conference: z.ZodOptional<z.ZodEnum<["ACC", "American Athletic", "Big 12", "Big Ten", "Conference USA", "FBS Independents", "Mid-American", "Mountain West", "Pac-12", "SEC", "Sun Belt"]>>;
}, "strip", z.ZodTypeAny, {
    conference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
}, {
    conference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
}>;
export declare const fbsSchema: z.ZodObject<{
    year: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    year?: number | undefined;
}, {
    year?: number | undefined;
}>;
export declare const rosterSchema: z.ZodObject<{
    team: z.ZodOptional<z.ZodString>;
    year: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    year?: number | undefined;
    team?: string | undefined;
}, {
    year?: number | undefined;
    team?: string | undefined;
}>;
export declare const talentSchema: z.ZodObject<{
    year: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    year?: number | undefined;
}, {
    year?: number | undefined;
}>;
export declare const matchupSchema: z.ZodObject<{
    team1: z.ZodString;
    team2: z.ZodString;
    minYear: z.ZodOptional<z.ZodNumber>;
    maxYear: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    minYear?: number | undefined;
    maxYear?: number | undefined;
    team1: string;
    team2: string;
}, {
    minYear?: number | undefined;
    maxYear?: number | undefined;
    team1: string;
    team2: string;
}>;
