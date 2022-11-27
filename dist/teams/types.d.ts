import { z } from 'zod';
import { classifications, conferences, divisions, Position, Timezone } from '../shared.js';
export interface Location {
    venue_id: number | null;
    name: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    country_code: 'US' | null;
    timezone: Timezone | null;
    latitude: number | null;
    longitude: number | null;
    elevation: string | null;
    capacity: number | null;
    year_constructed: number | null;
    grass: boolean | null;
    dome: boolean | null;
}
export interface Team {
    id: number | null;
    school: string | null;
    mascot: string | null;
    abbreviation: string | null;
    alt_name1: string | null;
    alt_name2: string | null;
    alt_name3: string | null;
    conference: z.infer<typeof conferences> | null;
    classification: z.infer<typeof classifications> | null;
    color: string | null;
    alt_color: string | null;
    logos: string[] | null;
    twitter: string | null;
    location: Location | null;
}
export interface FBSTeam {
    id: number | null;
    school: string | null;
    mascot: string | null;
    abbreviation: string | null;
    alt_name1: string | null;
    alt_name2: string | null;
    alt_name3: string | null;
    conference: z.infer<typeof conferences> | null;
    division: z.infer<typeof divisions> | null;
    color: string | null;
    alt_color: string | null;
    logos: string[] | null;
    twitter: string | null;
    location: Location | null;
}
export interface Player {
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    team: string | null;
    weight: number | null;
    height: number | null;
    jersey: number | null;
    year: number | null;
    position: Position | null;
    home_city: string | null;
    home_state: string | null;
    home_country: string | null;
    home_latitude: string | null;
    home_longitude: string | null;
    home_county_fips: string | null;
    recruit_ids: number[] | null;
}
export interface Talent {
    year: number | null;
    team: string | null;
    talent: string | null;
}
interface Game {
    season: number | null;
    week: number | null;
    seasonType: string | null;
    date: Date | null;
    neutralSite: boolean | null;
    venue: string | null;
    homeTeam: string | null;
    homeScore: number | null;
    awayTeam: string | null;
    awayScore: number | null;
    winner: string | null;
}
export interface Matchup {
    team1: string | null;
    team2: string | null;
    startYear: string | null;
    endYear: string | null;
    team1Wins: number | null;
    team2Wins: number | null;
    ties: number | null;
    games: Game[];
}
export {};
