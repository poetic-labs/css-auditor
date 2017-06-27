import { get, set } from 'lodash';

function setIfUndefined(object, path, value) {
  if (!get(object, path)) {
    set(object, path, value);
  }
}

export default setIfUndefined;
