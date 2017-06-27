import cssParser from 'css';
import { groupBy } from 'lodash';

const parseCss = (css) => {
  const { stylesheet } = cssParser.parse(css);

  const groupedTypes = groupBy(stylesheet.rules, rule => rule.type);
  const rules = groupedTypes.rule || [];

  // TODO: Parse other node types:
  // charset, document, font-face, host, keyframes, keyframe, media, namespace, page, supports
  return { rules };
};

export default parseCss;
