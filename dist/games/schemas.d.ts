import { z } from 'zod';
export declare const gamesSchema: z.ZodObject<{
    year: z.ZodNumber;
    week: z.ZodOptional<z.ZodNumber>;
    seasonType: z.ZodOptional<z.ZodEnum<["regular", "postseason"]>>;
    team: z.ZodOptional<z.ZodString>;
    home: z.ZodOptional<z.ZodString>;
    away: z.ZodOptional<z.ZodString>;
    conference: z.ZodOptional<z.ZodString>;
    division: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id?: number | undefined;
    week?: number | undefined;
    seasonType?: "regular" | "postseason" | undefined;
    team?: string | undefined;
    home?: string | undefined;
    away?: string | undefined;
    conference?: string | undefined;
    division?: string | undefined;
    year: number;
}, {
    id?: number | undefined;
    week?: number | undefined;
    seasonType?: "regular" | "postseason" | undefined;
    team?: string | undefined;
    home?: string | undefined;
    away?: string | undefined;
    conference?: string | undefined;
    division?: string | undefined;
    year: number;
}>;
export declare const recordsSchema: z.ZodObject<{
    year: z.ZodOptional<z.ZodNumber>;
    team: z.ZodOptional<z.ZodString>;
    conference: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    year?: number | undefined;
    team?: string | undefined;
    conference?: string | undefined;
}, {
    year?: number | undefined;
    team?: string | undefined;
    conference?: string | undefined;
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
    conference: z.ZodOptional<z.ZodString>;
    mediaType: z.ZodOptional<z.ZodEnum<["tv", "radio", "web", "ppv", "mobile"]>>;
    classification: z.ZodOptional<z.ZodEnum<["fbs", "fcs", "ii", "iii"]>>;
}, "strip", z.ZodTypeAny, {
    week?: number | undefined;
    seasonType?: "both" | "regular" | "postseason" | undefined;
    team?: string | undefined;
    conference?: string | undefined;
    mediaType?: "tv" | "radio" | "web" | "ppv" | "mobile" | undefined;
    classification?: "fbs" | "fcs" | "ii" | "iii" | undefined;
    year: number;
}, {
    week?: number | undefined;
    seasonType?: "both" | "regular" | "postseason" | undefined;
    team?: string | undefined;
    conference?: string | undefined;
    mediaType?: "tv" | "radio" | "web" | "ppv" | "mobile" | undefined;
    classification?: "fbs" | "fcs" | "ii" | "iii" | undefined;
    year: number;
}>;
export declare const playersSchema: z.ZodObject<{
    year: z.ZodNumber;
    week: z.ZodOptional<z.ZodNumber>;
    seasonType: z.ZodOptional<z.ZodEnum<["regular", "postseason"]>>;
    team: z.ZodOptional<z.ZodString>;
    conference: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodString>;
    gameId: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    week?: number | undefined;
    seasonType?: "regular" | "postseason" | undefined;
    team?: string | undefined;
    conference?: string | undefined;
    category?: string | undefined;
    gameId?: number | undefined;
    year: number;
}, {
    week?: number | undefined;
    seasonType?: "regular" | "postseason" | undefined;
    team?: string | undefined;
    conference?: string | undefined;
    category?: string | undefined;
    gameId?: number | undefined;
    year: number;
}>;
export declare const teamsSchema: z.ZodObject<{
    year: z.ZodNumber;
    week: z.ZodOptional<z.ZodNumber>;
    seasonType: z.ZodOptional<z.ZodEnum<["regular", "postseason"]>>;
    team: z.ZodOptional<z.ZodString>;
    conference: z.ZodOptional<z.ZodString>;
    gameId: z.ZodOptional<z.ZodNumber>;
    classification: z.ZodOptional<z.ZodEnum<["fbs", "fcs", "ii", "iii"]>>;
}, "strip", z.ZodTypeAny, {
    week?: number | undefined;
    seasonType?: "regular" | "postseason" | undefined;
    team?: string | undefined;
    conference?: string | undefined;
    classification?: "fbs" | "fcs" | "ii" | "iii" | undefined;
    gameId?: number | undefined;
    year: number;
}, {
    week?: number | undefined;
    seasonType?: "regular" | "postseason" | undefined;
    team?: string | undefined;
    conference?: string | undefined;
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
