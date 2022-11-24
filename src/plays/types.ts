interface Elapsed {
  minutes: number | null;
  seconds: number | null;
}

export interface Play {
  id: string | null;
  offense: string | null;
  offense_conference: string | null;
  defense: string | null;
  defense_conference: string | null;
  home: string | null;
  away: string | null;
  offense_score: number | null;
  defense_score: number | null;
  game_id: number | null;
  drive_id: string | null;
  drive_number: number | null;
  play_number: number | null;
  period: number | null;
  clock: Elapsed | null;
  offense_timeouts: number | null;
  defense_timeouts: number | null;
  yard_line: number | null;
  yards_to_goal: number | null;
  down: number | null;
  distance: number | null;
  scoring: boolean | null;
  yards_gained: number | null;
  play_type: string | null;
  play_text: string | null;
  ppa: string | null;
  wallclock: Elapsed | null;
}
