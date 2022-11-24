import { z } from 'zod';
export declare const playSchema: z.ZodObject<{
    seasonType: z.ZodOptional<z.ZodEnum<["regular", "postseason"]>>;
    year: z.ZodNumber;
    week: z.ZodNumber;
    team: z.ZodOptional<z.ZodString>;
    offense: z.ZodOptional<z.ZodString>;
    defense: z.ZodOptional<z.ZodString>;
    conference: z.ZodOptional<z.ZodString>;
    offenseConference: z.ZodOptional<z.ZodString>;
    defenseConference: z.ZodOptional<z.ZodString>;
    playType: z.ZodOptional<z.ZodNumber>;
    classification: z.ZodOptional<z.ZodEnum<["fbs", "fcs", "ii", "iii"]>>;
}, "strip", z.ZodTypeAny, {
    seasonType?: "regular" | "postseason" | undefined;
    team?: string | undefined;
    conference?: string | undefined;
    classification?: "fbs" | "fcs" | "ii" | "iii" | undefined;
    offense?: string | undefined;
    defense?: string | undefined;
    offenseConference?: string | undefined;
    defenseConference?: string | undefined;
    playType?: number | undefined;
    year: number;
    week: number;
}, {
    seasonType?: "regular" | "postseason" | undefined;
    team?: string | undefined;
    conference?: string | undefined;
    classification?: "fbs" | "fcs" | "ii" | "iii" | undefined;
    offense?: string | undefined;
    defense?: string | undefined;
    offenseConference?: string | undefined;
    defenseConference?: string | undefined;
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
    conference: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    year?: number | undefined;
    week?: number | undefined;
    seasonType?: "both" | "regular" | "postseason" | undefined;
    team?: string | undefined;
    conference?: string | undefined;
    gameId?: number | undefined;
    athleteId?: number | undefined;
    statTypeId?: number | undefined;
}, {
    year?: number | undefined;
    week?: number | undefined;
    seasonType?: "both" | "regular" | "postseason" | undefined;
    team?: string | undefined;
    conference?: string | undefined;
    gameId?: number | undefined;
    athleteId?: number | undefined;
    statTypeId?: number | undefined;
}>;
