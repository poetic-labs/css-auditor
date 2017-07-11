import browserslist from 'browserslist';
import browserQueryNames from '../browsers/browserQueryNames';

const selectAllVersions = browserQueryName => (
  browserslist(`${browserQueryName} >= 0`)
    .reduce((selectedVersions, browserVersion) => ({
      ...selectedVersions,
      [browserVersion.split(' ')[1]]: true,
    }), {})
);

const getFullBrowserScope = () => (
  Object.keys(browserQueryNames)
    .reduce((browserScope, browserId) => ({
      ...browserScope,
      [browserId]: {
        ...selectAllVersions(browserQueryNames[browserId]),
      },
    }), {})
);

export default getFullBrowserScope;
