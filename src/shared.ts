import { z } from 'zod';

export const conferences = z.enum([
  'ACC',
  'American Athletic',
  'Big 12',
  'Big Ten',
  'Conference USA',
  'FBS Independents',
  'Mid-American',
  'Mountain West',
  'Pac-12',
  'SEC',
  'Sun Belt',
]);

export const classifications = z.enum(['fbs', 'fcs', 'ii', 'iii']);

export const divisions = z.enum(['Atlantic', 'Coastal', 'East', 'Mountain', 'West']);

export enum Timezone {
  AmericaBoise = 'America/Boise',
  AmericaChicago = 'America/Chicago',
  AmericaDenver = 'America/Denver',
  AmericaDetroit = 'America/Detroit',
  AmericaIndianaIndianapolis = 'America/Indiana/Indianapolis',
  AmericaKentuckyLouisville = 'America/Kentucky/Louisville',
  AmericaLasAngeles = 'America/Las_Angeles',
  AmericaLosAngeles = 'America/Los_Angeles',
  AmericaNewYork = 'America/New_York',
  AmericaPhoenix = 'America/Phoenix',
  AustraliaSydney = 'Australia/Sydney',
  PacificHonolulu = 'Pacific/Honolulu',
}

export enum StatType {
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

export enum Position {
  DB = 'DB',
  DL = 'DL',
  LB = 'LB',
  Ls = 'LS',
  Ol = 'OL',
  P = 'P',
  Pk = 'PK',
  Qb = 'QB',
  Rb = 'RB',
  Te = 'TE',
  Wr = 'WR',
}
