import { forOwn } from 'lodash';
import setIfUndefined from './setIfUndefined';

const getBrowserSupports = (featureSupports) => {
  const browserSupports = {};

  forOwn(featureSupports, (browsers) => {
    forOwn(browsers, (supports, browser) => {
      setIfUndefined(browserSupports, browser, []);

      forOwn(supports, (version, type) => {
        setIfUndefined(browserSupports, browser, {});
        setIfUndefined(browserSupports, [browser, type], []);

        if (!browserSupports[browser][type].includes(version)) {
          browserSupports[browser][type].push(version);
        }
      });
    });
  });

  return browserSupports;
};

export default getBrowserSupports;
