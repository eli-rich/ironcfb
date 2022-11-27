import { z } from 'zod';
export declare const gamesSchema: z.ZodObject<{
    year: z.ZodNumber;
    week: z.ZodOptional<z.ZodNumber>;
    seasonType: z.ZodOptional<z.ZodEnum<["regular", "postseason"]>>;
    team: z.ZodOptional<z.ZodString>;
    home: z.ZodOptional<z.ZodString>;
    away: z.ZodOptional<z.ZodString>;
    conference: z.ZodOptional<z.ZodEnum<["ACC", "American Athletic", "Big 12", "Big Ten", "Conference USA", "FBS Independents", "Mid-American", "Mountain West", "Pac-12", "SEC", "Sun Belt"]>>;
    division: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
    week?: number | undefined;
    seasonType?: "regular" | "postseason" | undefined;
    team?: string | undefined;
    home?: string | undefined;
    away?: string | undefined;
    conference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    division?: string | undefined;
    year: number;
}, {
    id?: number | undefined;
    week?: number | undefined;
    seasonType?: "regular" | "postseason" | undefined;
    team?: string | undefined;
    home?: string | undefined;
    away?: string | undefined;
    conference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    division?: string | undefined;
    year: number;
}>;
export declare const recordsSchema: z.ZodObject<{
    year: z.ZodOptional<z.ZodNumber>;
    team: z.ZodOptional<z.ZodString>;
    conference: z.ZodOptional<z.ZodEnum<["ACC", "American Athletic", "Big 12", "Big Ten", "Conference USA", "FBS Independents", "Mid-American", "Mountain West", "Pac-12", "SEC", "Sun Belt"]>>;
}, "strip", z.ZodTypeAny, {
    year?: number | undefined;
    team?: string | undefined;
    conference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
}, {
    year?: number | undefined;
    team?: string | undefined;
    conference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
}>;
export declare const calendarSchema: z.ZodObject<{
    year: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    year?: number | undefined;
}, {
    year?: number | undefined;
}>;
export declare const mediaSchema: z.ZodObject<{
    year: z.ZodNumber;
    week: z.ZodOptional<z.ZodNumber>;
    seasonType: z.ZodOptional<z.ZodEnum<["regular", "postseason", "both"]>>;
    team: z.ZodOptional<z.ZodString>;
    conference: z.ZodOptional<z.ZodEnum<["ACC", "American Athletic", "Big 12", "Big Ten", "Conference USA", "FBS Independents", "Mid-American", "Mountain West", "Pac-12", "SEC", "Sun Belt"]>>;
    mediaType: z.ZodOptional<z.ZodEnum<["tv", "radio", "web", "ppv", "mobile"]>>;
    classification: z.ZodOptional<z.ZodEnum<["Atlantic", "Coastal", "East", "Mountain", "West"]>>;
}, "strip", z.ZodTypeAny, {
    week?: number | undefined;
    seasonType?: "both" | "regular" | "postseason" | undefined;
    team?: string | undefined;
    conference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    mediaType?: "tv" | "radio" | "web" | "ppv" | "mobile" | undefined;
    classification?: "Atlantic" | "Coastal" | "East" | "Mountain" | "West" | undefined;
    year: number;
}, {
    week?: number | undefined;
    seasonType?: "both" | "regular" | "postseason" | undefined;
    team?: string | undefined;
    conference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    mediaType?: "tv" | "radio" | "web" | "ppv" | "mobile" | undefined;
    classification?: "Atlantic" | "Coastal" | "East" | "Mountain" | "West" | undefined;
    year: number;
}>;
export declare const playersSchema: z.ZodObject<{
    year: z.ZodNumber;
    week: z.ZodOptional<z.ZodNumber>;
    seasonType: z.ZodOptional<z.ZodEnum<["regular", "postseason"]>>;
    team: z.ZodOptional<z.ZodString>;
    conference: z.ZodOptional<z.ZodEnum<["ACC", "American Athletic", "Big 12", "Big Ten", "Conference USA", "FBS Independents", "Mid-American", "Mountain West", "Pac-12", "SEC", "Sun Belt"]>>;
    category: z.ZodOptional<z.ZodString>;
    gameId: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    week?: number | undefined;
    seasonType?: "regular" | "postseason" | undefined;
    team?: string | undefined;
    conference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    category?: string | undefined;
    gameId?: number | undefined;
    year: number;
}, {
    week?: number | undefined;
    seasonType?: "regular" | "postseason" | undefined;
    team?: string | undefined;
    conference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    category?: string | undefined;
    gameId?: number | undefined;
    year: number;
}>;
export declare const teamsSchema: z.ZodObject<{
    year: z.ZodNumber;
    week: z.ZodOptional<z.ZodNumber>;
    seasonType: z.ZodOptional<z.ZodEnum<["regular", "postseason"]>>;
    team: z.ZodOptional<z.ZodString>;
    conference: z.ZodOptional<z.ZodEnum<["ACC", "American Athletic", "Big 12", "Big Ten", "Conference USA", "FBS Independents", "Mid-American", "Mountain West", "Pac-12", "SEC", "Sun Belt"]>>;
    gameId: z.ZodOptional<z.ZodNumber>;
    classification: z.ZodOptional<z.ZodEnum<["fbs", "fcs", "ii", "iii"]>>;
}, "strip", z.ZodTypeAny, {
    week?: number | undefined;
    seasonType?: "regular" | "postseason" | undefined;
    team?: string | undefined;
    conference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    classification?: "fbs" | "fcs" | "ii" | "iii" | undefined;
    gameId?: number | undefined;
    year: number;
}, {
    week?: number | undefined;
    seasonType?: "regular" | "postseason" | undefined;
    team?: string | undefined;
    conference?: "ACC" | "American Athletic" | "Big 12" | "Big Ten" | "Conference USA" | "FBS Independents" | "Mid-American" | "Mountain West" | "Pac-12" | "SEC" | "Sun Belt" | undefined;
    classification?: "fbs" | "fcs" | "ii" | "iii" | undefined;
    gameId?: number | undefined;
    year: number;
}>;
export declare const advancedSchema: z.ZodObject<{
    gameId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    gameId: number;
}, {
    gameId: number;
}>;
