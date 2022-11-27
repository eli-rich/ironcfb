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

export const divisions = z.enum(['fbs', 'fcs', 'ii', 'iii']);
