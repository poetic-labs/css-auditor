export const includes = needle => feature => hayStack => (
  hayStack.toString().indexOf(needle) !== -1
    ? feature
    : undefined
);

export const startsWith = needle => feature => hayStack => (
  hayStack.toString().substr(0, needle.length) === needle
    ? feature
    : undefined
);

export const test = pattern => feature => sample => (
  pattern.test(sample)
    ? feature
    : undefined
);
