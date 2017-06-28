const includes = needle => features => hayStack => (
  hayStack.toString().indexOf(needle) !== -1
    ? features
    : undefined
);

export default [
  includes('rgba')('css3-colors'),
  includes('hsl')('css3-colors'),
  includes('hsla')('css3-colors'),
];
