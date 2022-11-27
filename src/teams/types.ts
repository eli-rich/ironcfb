import { conferences } from '../shared.js';

interface Location {
  venue_id: string | null;
  name: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  country_code: string | null;
  timezone: string | null;
  latitude: number | null;
  longitude: number | null;
  capacity: number | null;
  years_constructed: number | null;
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
  conference: typeof conferences | null;
  classification: string | null;
  color: string | null;
  alt_color: string | null;
  logos: string[] | null;
  twitter: string | null;
  location: Location | null;
}
