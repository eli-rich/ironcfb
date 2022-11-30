import IronCFB from '../dist/index.js';

import * as dotenv from 'dotenv';
dotenv.config();

const iron = new IronCFB({ apiKey: process.env.CFB_KEY!, ua: 'MyAppName/1.0.0 using IronCFB' });

const ironBowls = await iron.teams.matchup({
  team1: 'Alabama',
  team2: 'Auburn',
  minYear: 2000,
  maxYear: 2022,
});

const wins = ironBowls.games.reduce(
  (wins, game) => {
    if (game.winner === 'Alabama') wins.alabama++;
    if (game.winner === 'Auburn') wins.auburn++;
    return wins;
  },
  { alabama: 0, auburn: 0 },
);

console.log(wins);
