interface RecordGames {
    games: number;
    wins: number;
    losses: number;
    ties: number;
}
export interface TeamRecord {
    year: number | null;
    team: string | null;
    conference: string | null;
    division: string | null;
    expectedWins: number | null;
    total: RecordGames | null;
    conferenceGames: RecordGames | null;
    homeGames: RecordGames | null;
    awayGames: RecordGames | null;
}
export interface Game {
    id: number | null;
    season: number | null;
    week: number | null;
    season_type: string | null;
    start_date: string | null;
    start_time_tbd: boolean | null;
    completed: boolean | null;
    neutral_site: boolean | null;
    conference_game: boolean | null;
    attendance: number | null;
    venue_id: number | null;
    venue: string | null;
    home_id: number | null;
    home_team: string | null;
    home_conference: string | null;
    home_division: string | null;
    home_points: number | null;
    home_line_scores: number[] | null;
    home_post_win_prob: number | null;
    home_pregame_elo: number | null;
    home_postgame_elo: number | null;
    away_id: number | null;
    away_team: string | null;
    away_conference: string | null;
    away_division: string | null;
    away_points: number | null;
    away_line_scores: number[] | null;
    away_post_win_prob: number | null;
    away_pregame_elo: number | null;
    away_postgame_elo: number | null;
    excitement_index: number | null;
    highlights: string | null;
    notes: string | null;
}
export interface Week {
    season: number | null;
    week: number | null;
    seasonType: 'regular' | 'postseason';
    firstGameStart: string | null;
    lastGameStart: string | null;
}
export interface Media {
    id: number | null;
    season: number | null;
    week: number | null;
    seasonType: string | null;
    startTime: string | null;
    isStartTimeTBD: boolean | null;
    homeTeam: string | null;
    homeConference: string | null;
    awayTeam: string | null;
    awayConference: string | null;
    mediaType: string | null;
    outlet: string | null;
}
declare enum HomeAway {
    Home = "home",
    Away = "away"
}
interface Athlete {
    id: string | null;
    name: string | null;
    stat: string | null;
}
interface StatType {
    name: string | null;
    athletes: Athlete[] | null;
}
interface StatCat {
    name: string | null;
    types: StatType[] | null;
}
interface PlayerTeam {
    school: string | null;
    conference: string | null;
    homeAway: HomeAway | null;
    points: number | null;
    categories: StatCat[] | null;
}
export interface PlayerStats {
    id: number | null;
    teams: PlayerTeam[] | null;
}
interface Stat {
    category: string | null;
    stat: string | null;
}
interface Team {
    school: string | null;
    conference: string | null;
    homeAway: HomeAway | null;
    points: number | null;
    stats: Stat[] | null;
}
export interface TeamStats {
    id: number | null;
    teams: Team[] | null;
}
export interface Box {
    teams: Teams | null;
    players: Players | null;
}
export interface Players {
    usage: Usage[] | null;
    ppa: PlayersPpa[] | null;
}
export interface PlayersPpa {
    player: string | null;
    team: string | null;
    position: Position | null;
    average: Average | null;
    cumulative: Average | null;
}
export interface Average {
    total: number | null;
    quarter1: number | null;
    quarter2: number | null;
    quarter3: number | null;
    quarter4: number | null;
    rushing: number | null;
    passing: number | null;
}
export declare enum Position {
    Qb = "QB",
    Rb = "RB",
    Te = "TE",
    Wr = "WR"
}
export interface Usage {
    player: string | null;
    team: string | null;
    position: Position | null;
    total: number | null;
    quarter1: number | null;
    quarter2: number | null;
    quarter3: number | null;
    quarter4: number | null;
    rushing: number | null;
    passing: number | null;
}
export interface Teams {
    ppa: CumulativePpaElement[] | null;
    cumulativePpa: CumulativePpaElement[] | null;
    successRates: SuccessRate[] | null;
    explosiveness: Explosiveness[] | null;
    rushing: Rushing[] | null;
    havoc: Havoc[] | null;
    scoringOpportunities: ScoringOpportunity[] | null;
    fieldPosition: FieldPosition[] | null;
}
export interface CumulativePpaElement {
    team: string | null;
    plays: number | null;
    overall: Overall | null;
    passing: Overall | null;
    rushing: Overall | null;
}
export interface Overall {
    total: number | null;
    quarter1: number | null;
    quarter2: number | null;
    quarter3: number | null;
    quarter4: number | null;
}
export interface Explosiveness {
    team: string | null;
    overall: Overall | null;
}
export interface FieldPosition {
    team: string | null;
    averageStart: string | null;
    averageStartingPredictedPoints: string | null;
}
export interface Havoc {
    team: string | null;
    total: string | null;
    frontSeven: string | null;
    db: string | null;
}
export interface Rushing {
    team: string | null;
    powerSuccess: string | null;
    stuffRate: string | null;
    lineYards: string | null;
    lineYardsAverage: string | null;
    secondLevelYards: string | null;
    secondLevelYardsAverage: string | null;
    openFieldYards: string | null;
    openFieldYardsAverage: string | null;
}
export interface ScoringOpportunity {
    team: string | null;
    opportunities: number | null;
    points: number | null;
    pointsPerOpportunity: number | null;
}
export interface SuccessRate {
    team: Team | null;
    overall: Overall | null;
    standardDowns: Overall | null;
    passingDowns: Overall | null;
}
export {};
