interface Elapsed {
  minutes: number | null;
  seconds: number | null;
}

export interface PlayType {
  id: number;
  text: string;
  abbreviation: null | string;
}

export interface TypeStat {
  id: number;
  name: string;
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

enum StatType {
  Completion = 'Completion',
  Fumble = 'Fumble',
  FumbleForced = 'Fumble Forced',
  FumbleRecovered = 'Fumble Recovered',
  Incompletion = 'Incompletion',
  Interception = 'Interception',
  InterceptionThrown = 'Interception Thrown',
  PassBreakup = 'Pass Breakup',
  Reception = 'Reception',
  Rush = 'Rush',
  Sack = 'Sack',
  SackTaken = 'Sack Taken',
  Target = 'Target',
  Touchdown = 'Touchdown',
}

export interface StatPlay {
  gameId: number | null;
  season: number | null;
  week: number | null;
  team: string | null;
  conference: string | null;
  opponent: string | null;
  teamScore: number | null;
  opponentScore: number | null;
  driveId: string | null;
  playId: string | null;
  period: number | null;
  yardsToGoal: number | null;
  down: number | null;
  distance: number | null;
  athleteId: string | null;
  athleteName: string | null;
  statType: StatType | null;
  stat: number | null;
}
