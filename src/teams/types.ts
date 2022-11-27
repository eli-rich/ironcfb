import { z } from 'zod';
import { classifications, conferences, divisions, Timezone } from '../shared.js';

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
