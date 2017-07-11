import { features, feature as unpackFeature } from 'caniuse-lite';

const selectSupportTypeVersion = ({ nextVersion, setVersion, supportType }) => {
  let selectedVersion;

  if (setVersion === undefined) {
    selectedVersion = nextVersion;
  } else if (supportType === 'y') {
    selectedVersion = Math.min(nextVersion, setVersion);
  } else {
    selectedVersion = Math.max(nextVersion, setVersion);
  }

  return selectedVersion;
};

const parseBrowserSupport = (featureStats, browserScope) => {
  const support = {};

  Object.keys(browserScope).forEach((browser) => {
    support[browser] = {};

    const featureVersionSupports = featureStats[browser];

    Object.keys(browserScope[browser]).forEach((versionOrRange) => {
      const [minVersion] = versionOrRange.split('-');
      const parsedVersion = parseFloat(minVersion);

      if (!isNaN(parsedVersion)) {
        const supportTypes = featureVersionSupports[versionOrRange].split(' ');

        supportTypes.forEach((supportType) => {
          support[browser][supportType] = selectSupportTypeVersion({
            supportType,
            setVersion: support[browser][supportType],
            nextVersion: parsedVersion,
          });
        });
      }
    });
  });

  return support;
};

const getSupport = (featureName, browserScope) => {
  const feature = unpackFeature(features[featureName]);

  return parseBrowserSupport(feature.stats, browserScope);
};

export default getSupport;
