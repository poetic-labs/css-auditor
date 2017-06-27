/* eslint-disable quote-props */

const includes = needle => features => hayStack => (
  hayStack.toString().indexOf(needle) !== -1
    ? features
    : undefined
);

export const props = {
  '-webkit-clip-path': ['css-clip-path', 'css-masks'],
  'clip-path': ['css-clip-path', 'css-masks'],

  '-ms-touch-action': ['css-touch-action', 'pointer'],
  'touch-action': ['css-touch-action', 'pointer'],

  'background-clip': 'background-img-opts',
  'background-origin': 'background-img-opts',
  'background-size': 'background-img-opts',

  '-o-border-image': 'border-image',
  'border-image': 'border-image',

  '-moz-border-radius': 'border-radius',
  '-moz-border-radius-bottomleft': 'border-radius',
  '-moz-border-radius-bottomright': 'border-radius',
  '-moz-border-radius-topleft': 'border-radius',
  '-moz-border-radius-topright': 'border-radius',
  '-webkit-border-radius': 'border-radius',
  '-webkit-border-bottom-left-radius': 'border-radius',
  '-webkit-border-bottom-right-radius': 'border-radius',
  '-webkit-border-top-left-radius': 'border-radius',
  '-webkit-border-top-right-radius': 'border-radius',
  'border-radius': 'border-radius',
  'border-bottom-left-radius': 'border-radius',
  'border-bottom-right-radius': 'border-radius',
  'border-top-left-radius': 'border-radius',
  'border-top-right-radius': 'border-radius',

  '-webkit-animation': 'css-animation',
  '-webkit-animation-delay': 'css-animation',
  '-webkit-animation-direction': 'css-animation',
  '-webkit-animation-duration': 'css-animation',
  '-webkit-animation-fill-mode': 'css-animation',
  '-webkit-animation-iteration-count': 'css-animation',
  '-webkit-animation-name': 'css-animation',
  '-webkit-animation-play-state': 'css-animation',
  '-webkit-animation-timing-function': 'css-animation',
  'animation': 'css-animation',
  'animation-delay': 'css-animation',
  'animation-direction': 'css-animation',
  'animation-duration': 'css-animation',
  'animation-fill-mode': 'css-animation',
  'animation-iteration-count': 'css-animation',
  'animation-name': 'css-animation',
  'animation-play-state': 'css-animation',
  'animation-timing-function': 'css-animation',
  // '@keyframes': 'css-animation',

  '-webkit-box-shadow': 'css-boxshadow',
  'box-shadow': 'css-boxshadow',

  '-webkit-box-sizing': 'css3-boxsizing',
  'box-sizing': 'css3-boxsizing',

  '-webkit-filter': 'css-filters',
  'filter': 'css-filters',

  '-webkit-hyphens': 'css-hyphens',
  '-ms-hyphens': 'css-hyphens',
  'hyphens': 'css-hyphens',

  '-moz-tab-size': 'css3-tabsize',
  '-o-tab-size': 'css3-tabsize',
  'tab-size': 'css3-tabsize',

  '-webkit-transition': 'css-transitions',
  '-webkit-transition-delay': 'css-transitions',
  '-webkit-transition-duration': 'css-transitions',
  '-webkit-transition-property': 'css-transitions',
  '-webkit-transition-timing-function': 'css-transitions',
  'transition': 'css-transitions',
  'transition-delay': 'css-transitions',
  'transition-duration': 'css-transitions',
  'transition-property': 'css-transitions',
  'transition-timing-function': 'css-transitions',

  '-moz-box-align': 'flexbox',
  '-moz-box-ordinal-group': 'flexbox',
  '-ms-flex': 'flexbox',
  '-ms-flex-align': 'flexbox',
  '-ms-flex-direction': 'flexbox',
  '-ms-flex-flow': 'flexbox',
  '-ms-flex-item-align': 'flexbox',
  '-ms-flex-line-pack': 'flexbox',
  '-ms-flex-order': 'flexbox',
  '-ms-flex-pack': 'flexbox',
  '-ms-flex-negative': 'flexbox',
  '-ms-flex-positive': 'flexbox',
  '-ms-flex-preferred-size': 'flexbox',
  '-ms-flex-wrap': 'flexbox',
  '-webkit-align-items': 'flexbox',
  '-webkit-box-align': 'flexbox',
  '-webkit-box-direction': 'flexbox',
  '-webkit-box-ordinal-group': 'flexbox',
  '-webkit-box-orient': 'flexbox',
  '-webkit-box-pack': 'flexbox',
  '-webkit-flex-direction': 'flexbox',
  '-webkit-order': 'flexbox',
  '-webkit-justify-content': 'flexbox',
  'align-content': 'flexbox',
  'align-items': 'flexbox',
  'align-self': 'flexbox',
  'flex-basis': 'flexbox',
  'flex-direction': 'flexbox',
  'flex-flow': 'flexbox',
  'flex-grow': 'flexbox',
  'flex-shrink': 'flexbox',
  'flex-wrap': 'flexbox',
  'justify-content': 'flexbox',
  'order': 'flexbox',

  '-webkit-font-feature-settings': 'font-feature',
  '-webkit-font-kerning': 'font-feature',
  '-webkit-font-language-override': 'font-feature',
  '-webkit-font-variant-ligatures': 'font-feature',
  'font-feature-settings': 'font-feature',
  'font-kerning': 'font-feature',
  'font-language-override': 'font-feature',
  'font-variant-ligatures': 'font-feature',

  '-webkit-column-break-after': 'multicolumn',
  '-webkit-column-break-before': 'multicolumn',
  '-webkit-column-break-inside': 'multicolumn',
  '-webkit-column-count': 'multicolumn',
  '-webkit-column-fill': 'multicolumn',
  '-webkit-column-gap': 'multicolumn',
  '-webkit-column-rule': 'multicolumn',
  '-webkit-column-rule-color': 'multicolumn',
  '-webkit-column-rule-style': 'multicolumn',
  '-webkit-column-rule-width': 'multicolumn',
  '-webkit-column-span': 'multicolumn',
  '-webkit-column-width': 'multicolumn',
  '-webkit-columns': 'multicolumn',
  'break-after': 'multicolumn',
  'break-before': 'multicolumn',
  'break-inside': 'multicolumn',
  'column-count': 'multicolumn',
  'column-fill': 'multicolumn',
  'column-gap': 'multicolumn',
  'column-width': 'multicolumn',
  'column-rule': 'multicolumn',
  'column-rule-color': 'multicolumn',
  'column-rule-width': 'multicolumn',
  'column-rule-style': 'multicolumn',
  'column-span': 'multicolumn',
  'columns': 'multicolumn',

  '-webkit-transform': 'transforms2d',
  '-webkit-transform-origin': 'transforms2d',
  'transform': 'transforms2d',
  'transform-origin': 'transforms2d',

  '-webkit-perspective': 'transforms3d',
  '-webkit-perspective-origin': 'transforms3d',
  '-webkit-transform-style': 'transforms3d',
  '-webkit-backface-visibility': 'transforms3d',
  'perspective': 'transforms3d',
  'perspective-origin': 'transforms3d',
  'transform-style': 'transforms3d',
  'backface-visibility': 'transforms3d',

  '-moz-user-select': 'user-select-none',
  '-ms-user-select': 'user-select-none',
  '-webkit-user-select': 'user-select-none',
  'user-select': 'user-select-none',

  '-webkit-text-decoration-color': 'text-decoration',
  '-webkit-text-decoration-line': 'text-decoration',
  '-webkit-text-decoration-style': 'text-decoration',
  'text-decoration-color': 'text-decoration',
  'text-decoration-line': 'text-decoration',
  'text-decoration-style': 'text-decoration',

  '-webkit-text-size-adjust': 'text-size-adjust',
  '-moz-text-size-adjust': 'text-size-adjust',
  '-ms-text-size-adjust': 'text-size-adjust',
  'text-size-adjust': 'text-size-adjust',

  'mask': 'css-masks',
  'mask-clip': 'css-masks',
  'mask-composite': 'css-masks',
  'mask-image': 'css-masks',
  'mask-origin': 'css-masks',
  'mask-position': 'css-masks',
  'mask-repeat': 'css-masks',
  'mask-size': 'css-masks',

  'font-face': 'fontface',

  'text-shadow': 'css-textshadow',

  '-webkit-box-reflect': 'css-reflections',
  'box-reflect': 'css-reflections',

  'opacity': 'css-opacity',

  'text-overflow': 'text-overflow',

  'overflow-wrap': 'wordwrap',

  'object-fit': 'object-fit',

  'min-width': 'minmaxwh',
  'max-width': 'minmaxwh',
  'min-height': 'minmaxwh',
  'max-height': 'minmaxwh',

  'pointer-events': 'pointer-events',

  'counter-reset': 'css-counters',
  'counter-increment': 'css-counters',

  'resize': 'css-resize',

  'word-break': 'word-break',

  'outline': 'outline',
  'outline-style': 'outline',
  'outline-width': 'outline',
  'outline-color': 'outline',

  'background-blend-mode': 'css-backgroundblendmode',

  'mix-blend-mode': 'css-mixblendmode',

  'will-change': 'will-change',

  'shape-outside': 'css-shapes',
  'shape-image-threshold': 'css-shapes',
  'shape-margin': 'css-shapes',

  'image-orientation': 'css-image-orientation',

  'appearance': 'css-appearance',

  'font-stretch': 'css-font-stretch',

  'font-size-adjust': 'font-size-adjust',
};

export const values = {};

export const propValues = {
  'display': {
    '-moz-box': 'flexbox',
    '-ms-flexbox': 'flexbox',
    '-webkit-box': 'flexbox',
    '-webkit-flex': 'flexbox',
    '-webkit-inline-box': 'flexbox',
    'flex': 'flexbox',
    'inline-flex': 'flexbox',

    'table': 'css-table',
    'table-cell': 'css-table',
    'table-layout': 'css-table',
    'table-row': 'css-table',

    'inline-block': 'inline-block',
  },

  'cursor': {
    'zoom-in': 'css3-cursors-newer',
    'zoom-out': 'css3-cursors-newer',
    'grab': 'css3-cursors-newer',
    'grabbing': 'css3-cursors-newer',

    'none': 'css3-cursors',
    'context-menu': 'css3-cursors',
    'cell': 'css3-cursors',
    'vertical-text': 'css3-cursors',
    'alias': 'css3-cursors',
    'copy': 'css3-cursors',
    'no-drop': 'css3-cursors',
    'not-allowed': 'css3-cursors',
    'nesw-resize': 'css3-cursors',
    'nwse-resize': 'css3-cursors',
    'col-resize': 'css3-cursors',
    'row-resize': 'css3-cursors',
    'all-scroll': 'css3-cursors',
  },

  'position': {
    'sticky': 'css-sticky',

    'fixed': 'css-fixed',
  },
};

export const valuesMatch = [
  includes('rgba')('css3-colors'),
  includes('hsl')('css3-colors'),
  includes('hsla')('css3-colors'),
];

export default {
  props,
  values,
  propValues,
  valuesMatch,
};
