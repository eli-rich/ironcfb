interface Season {
  school: string | null;
  year: number | null;
  games: number | null;
  wins: number | null;
  losses: number | null;
  ties: number | null;
  preseason_rank: number | null;
  postseason_rank: number | null;
  srs: string | null;
  sp_overall: string | null;
  sp_offense: string | null;
  sp_defense: string | null;
}

export interface Coach {
  first_name: string | null;
  last_name: string | null;
  hire_date: Date | null;
  seasons: Season[];
}
