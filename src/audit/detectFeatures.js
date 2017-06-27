import { props, values, propValues } from '../maps/features';

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
  }
}

export default detectFeatures;
