import { each } from 'lodash';
import {
  props,
  values,
  propValues,
  propValueMatchers,
  valueMatchers,
} from '../maps/features';

function checkMatchers({ matchers, value, onDetect }) {
  each(matchers, (match) => { // eslint-disable-line consistent-return
    const feature = match(value);

    if (feature) {
      onDetect(feature);

      return false;
    }
  });
}

function detectFeatures({ prop, value }, onDetect) {
  const feature = props[prop] ||
                  values[value] ||
                  (propValues[prop] && propValues[prop][value]);

  if (feature) {
    if (Array.isArray(feature)) {
      feature.forEach(onDetect);
    } else {
      onDetect(feature);
    }
  } else if (propValueMatchers[prop]) {
    checkMatchers({ matchers: propValueMatchers[prop], value, onDetect });
  } else {
    checkMatchers({ matchers: valueMatchers, value, onDetect });
  }
}

export default detectFeatures;
