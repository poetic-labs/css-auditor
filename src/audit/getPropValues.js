import setIfUndefined from './setIfUndefined';

const getPropValues = (rules) => {
  const propValues = {};

  rules.forEach(({ declarations }) => {
    declarations.forEach((declaration) => {
      const { property, value } = declaration;

      if (property && value) {
        setIfUndefined(propValues, property, {});
        setIfUndefined(propValues, [property, value], []);

        propValues[property][value].push(declaration);
      }
    });
  });

  return propValues;
};

export default getPropValues;
