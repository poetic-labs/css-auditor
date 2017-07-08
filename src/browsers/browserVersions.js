import browserslist from 'browserslist';
import browserDisplayNames from '../browsers/browserDisplayNames';
import browserQueryNames from '../browsers/browserQueryNames';

const parseBrowserVersions = browser => (
  browserslist(`${browser} >= 0`).map(browserVersion => browserVersion.split(' ')[1])
);

const browserVersions = Object.keys(browserQueryNames).map(id => ({
  id,
  name: browserDisplayNames[id],
  versions: parseBrowserVersions(browserQueryNames[id]),
}));

export default browserVersions;
