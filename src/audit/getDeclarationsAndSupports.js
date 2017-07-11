import { forOwn } from 'lodash';
import detectFeatures from './detectFeatures';
import setIfUndefined from './setIfUndefined';
import getSupport from '../caniuse/getSupport';

const getDeclarationsAndSupports = (propValues, browserScope) => {
  const featureDeclarations = {};
  const featureSupports = {};

  forOwn(propValues, (values, prop) => {
    forOwn(values, (declarations, value) => {
      detectFeatures({ prop, value }, (feature) => {
        setIfUndefined(featureDeclarations, feature, []);
        featureDeclarations[feature] = featureDeclarations[feature].concat(declarations);

        setIfUndefined(featureSupports, feature, getSupport(feature, browserScope));
      });
    });
  });

  return { featureDeclarations, featureSupports };
};

export default getDeclarationsAndSupports;
