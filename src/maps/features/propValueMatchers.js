/* eslint-disable quote-props */

import { includes, startsWith } from './matchers';

export default {
  '-o-border-image': [
    includes('linear-gradient')('css-gradients'), // moz, o, webkit
    includes('radial-gradient')('css-gradients'), // moz, o, webkit
  ],

  'background': [
    startsWith('-webkit-canvas')('css-canvas'),

    includes('linear-gradient')('css-gradients'), // moz, o, webkit
    includes('radial-gradient')('css-gradients'), // moz, o, webkit

    includes('repeating-linear-gradient')('css-repeating-gradients'), // moz, o, webkit
  ],

  'background-image': [
    includes('linear-gradient')('css-gradients'), // moz, o, webkit
    includes('radial-gradient')('css-gradients'), // moz, o, webkit

    includes('repeating-linear-gradient')('css-repeating-gradients'), // moz, o, webkit

    includes('image-set')('css-image-set'), // moz, ms, o
  ],

  'border-image': [
    includes('linear-gradient')('css-gradients'), // moz, o, webkit
    includes('radial-gradient')('css-gradients'), // moz, o, webkit
  ],
};
