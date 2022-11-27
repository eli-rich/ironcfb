import { z } from 'zod';
export declare const playSchema: z.ZodObject<{
    seasonType: z.ZodOptional<z.ZodEnum<["regular", "postseason"]>>;
    year: z.ZodNumber;
    week: z.ZodNumber;
    team: z.ZodOptional<z.ZodString>;
    offense: z.ZodOptional<z.ZodString>;
    defense: z.ZodOptional<z.ZodString>;
    conference: z.ZodOptional<z.ZodEnum<["ACC", "American Athletic", "Big 12", "Big Ten", "Conference USA", "FBS Independents", "Mid-American", "Mountain West", "Pac-12", "SEC", "Sun Belt"]>>;
    offenseConference: z.ZodOptional<z.ZodEnum<["ACC", "American Athletic", "Big 12", "Big Ten", "Conference USA", "FBS Independents", "Mid-American", "Mountain West", "Pac-12", "SEC", "Sun Belt"]>>;
    defenseConference: z.ZodOptional<z.ZodEnum<["ACC", "American Athletic", "Big 12", "Big Ten", "Conference USA", "FBS Independents", "Mid-American", "Mountain West", "Pac-12", "SEC", "Sun Belt"]>>;
    playType: z.ZodOptional<z.ZodNumber>;
    classification: z.ZodOptional<z.ZodEnum<["Atlantic", "Coastal", "East", "Mountain", "West"]>>;
}, "strip", z.ZodTypeAny, {
    seasonType?: "regular" | "postseason" | undefined;
    team?: string | undefined;
    conference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    classification?: "Atlantic" | "Coastal" | "East" | "Mountain" | "West" | undefined;
    offense?: string | undefined;
    defense?: string | undefined;
    offenseConference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    defenseConference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    playType?: number | undefined;
    year: number;
    week: number;
}, {
    seasonType?: "regular" | "postseason" | undefined;
    team?: string | undefined;
    conference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    classification?: "Atlantic" | "Coastal" | "East" | "Mountain" | "West" | undefined;
    offense?: string | undefined;
    defense?: string | undefined;
    offenseConference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    defenseConference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    playType?: number | undefined;
    year: number;
    week: number;
}>;
export declare const playStatSchema: z.ZodObject<{
    year: z.ZodOptional<z.ZodNumber>;
    week: z.ZodOptional<z.ZodNumber>;
    team: z.ZodOptional<z.ZodString>;
    gameId: z.ZodOptional<z.ZodNumber>;
    athleteId: z.ZodOptional<z.ZodNumber>;
    statTypeId: z.ZodOptional<z.ZodNumber>;
    seasonType: z.ZodOptional<z.ZodEnum<["regular", "postseason", "both"]>>;
    conference: z.ZodOptional<z.ZodEnum<["ACC", "American Athletic", "Big 12", "Big Ten", "Conference USA", "FBS Independents", "Mid-American", "Mountain West", "Pac-12", "SEC", "Sun Belt"]>>;
}, "strip", z.ZodTypeAny, {
    year?: number | undefined;
    week?: number | undefined;
    seasonType?: "both" | "regular" | "postseason" | undefined;
    team?: string | undefined;
    conference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    gameId?: number | undefined;
    athleteId?: number | undefined;
    statTypeId?: number | undefined;
}, {
    year?: number | undefined;
    week?: number | undefined;
    seasonType?: "both" | "regular" | "postseason" | undefined;
    team?: string | undefined;
    conference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    gameId?: number | undefined;
    athleteId?: number | undefined;
    statTypeId?: number | undefined;
}>;
