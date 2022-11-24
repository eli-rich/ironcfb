interface Elapsed {
  minutes: number;
  seconds: number;
}

export interface Drive {
  offense: string | null;
  offense_conference: string | null;
  defense: string | null;
  defense_conference: string | null;
  game_id: number | null;
  id: string | null;
  drive_number: number | null;
  scoring: boolean | null;
  start_period: number | null;
  start_yardline: number | null;
  start_yards_to_goal: number | null;
  start_time: Elapsed | null;
  end_period: number | null;
  end_yardline: number | null;
  end_yards_to_goal: number | null;
  end_time: Elapsed | null;
  elapsed: Elapsed | null;
  plays: number | null;
  yards: number | null;
  drive_result: string | null;
  is_home_offense: boolean | null;
  start_offense_score: number | null;
  start_defense_score: number | null;
  end_offense_score: number | null;
  end_defense_score: number | null;
}
