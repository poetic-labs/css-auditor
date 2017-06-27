import parseCss from './parseCss';
import getPropValues from './getPropValues';
import getDeclarationsAndSupports from './getDeclarationsAndSupports';
import getBrowserSupports from './getBrowserSupports';

const audit = (css) => {
  const { rules } = parseCss(css);

  const propValues = getPropValues(rules);
  const { featureSupports, featureDeclarations } = getDeclarationsAndSupports(propValues);
  const browserSupports = getBrowserSupports(featureSupports);

  return {
    propValues,
    featureDeclarations,
    featureSupports,
    browserSupports,
  };
};

export default audit;
