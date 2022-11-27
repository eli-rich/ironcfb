import Games from './games/games.js';
import Drives from './drives/drives.js';
import Plays from './plays/plays.js';
import Teams from './teams/teams.js';
import Conferences from './conferences/conferences.js';
export default class IronCFB {
    #private;
    games: Games;
    drives: Drives;
    plays: Plays;
    teams: Teams;
    conferences: Conferences;
    constructor(apiKey: string);
}
