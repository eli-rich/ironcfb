import { Timezone } from '../shared.js';
interface Location {
  x: number | null;
  y: number | null;
}

export interface Venue {
  id: number | null;
  name: string | null;
  capacity: number | null;
  grass: boolean | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  country_code: string | null;
  location: Location | null;
  elevation: number | null;
  year_constructed: number | null;
  dome: boolean | null;
  timezone: Timezone | null;
}
