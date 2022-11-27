import { z } from 'zod';
export declare const driveSchema: z.ZodObject<{
    seasonType: z.ZodOptional<z.ZodEnum<["preseason", "regular", "postseason"]>>;
    year: z.ZodNumber;
    week: z.ZodOptional<z.ZodNumber>;
    team: z.ZodOptional<z.ZodString>;
    offense: z.ZodOptional<z.ZodString>;
    defense: z.ZodOptional<z.ZodString>;
    conference: z.ZodOptional<z.ZodEnum<["ACC", "American Athletic", "Big 12", "Big Ten", "Conference USA", "FBS Independents", "Mid-American", "Mountain West", "Pac-12", "SEC", "Sun Belt"]>>;
    offenseConference: z.ZodOptional<z.ZodEnum<["ACC", "American Athletic", "Big 12", "Big Ten", "Conference USA", "FBS Independents", "Mid-American", "Mountain West", "Pac-12", "SEC", "Sun Belt"]>>;
    defenseConference: z.ZodOptional<z.ZodEnum<["ACC", "American Athletic", "Big 12", "Big Ten", "Conference USA", "FBS Independents", "Mid-American", "Mountain West", "Pac-12", "SEC", "Sun Belt"]>>;
    classification: z.ZodOptional<z.ZodEnum<["Atlantic", "Coastal", "East", "Mountain", "West"]>>;
}, "strip", z.ZodTypeAny, {
    week?: number | undefined;
    seasonType?: "regular" | "postseason" | "preseason" | undefined;
    team?: string | undefined;
    conference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    classification?: "Atlantic" | "Coastal" | "East" | "Mountain" | "West" | undefined;
    offense?: string | undefined;
    defense?: string | undefined;
    offenseConference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    defenseConference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    year: number;
}, {
    week?: number | undefined;
    seasonType?: "regular" | "postseason" | "preseason" | undefined;
    team?: string | undefined;
    conference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    classification?: "Atlantic" | "Coastal" | "East" | "Mountain" | "West" | undefined;
    offense?: string | undefined;
    defense?: string | undefined;
    offenseConference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    defenseConference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    year: number;
}>;
