'use strict';

import del from 'del';

export default clean;

function clean() {
  return del(['./rev-manifest.json', './build']);
}
