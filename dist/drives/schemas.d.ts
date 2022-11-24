import { z } from 'zod';
export declare const driveSchema: z.ZodObject<{
    seasonType: z.ZodOptional<z.ZodEnum<["preseason", "regular", "postseason"]>>;
    year: z.ZodNumber;
    week: z.ZodOptional<z.ZodNumber>;
    team: z.ZodOptional<z.ZodString>;
    offense: z.ZodOptional<z.ZodString>;
    defense: z.ZodOptional<z.ZodString>;
    conference: z.ZodOptional<z.ZodString>;
    offenseConference: z.ZodOptional<z.ZodString>;
    defenseConference: z.ZodOptional<z.ZodString>;
    classification: z.ZodOptional<z.ZodEnum<["fbs", "fcs", "ii", "iii"]>>;
}, "strip", z.ZodTypeAny, {
    week?: number | undefined;
    seasonType?: "regular" | "postseason" | "preseason" | undefined;
    team?: string | undefined;
    conference?: string | undefined;
    classification?: "fbs" | "fcs" | "ii" | "iii" | undefined;
    offense?: string | undefined;
    defense?: string | undefined;
    offenseConference?: string | undefined;
    defenseConference?: string | undefined;
    year: number;
}, {
    week?: number | undefined;
    seasonType?: "regular" | "postseason" | "preseason" | undefined;
    team?: string | undefined;
    conference?: string | undefined;
    classification?: "fbs" | "fcs" | "ii" | "iii" | undefined;
    offense?: string | undefined;
    defense?: string | undefined;
    offenseConference?: string | undefined;
    defenseConference?: string | undefined;
    year: number;
}>;
