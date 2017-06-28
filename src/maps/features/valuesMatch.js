import { includes, startsWith } from './matchers';

export default [
  startsWith('calc')('calc'),

  startsWith('rgb')('css3-colors'),
  startsWith('hsl')('css3-colors'),

  includes('rem')('rem'),

  includes('vw')('viewport-units'),
  includes('vh')('viewport-units'),
  includes('vmin')('viewport-units'),
  includes('vmax')('viewport-units'),
];
