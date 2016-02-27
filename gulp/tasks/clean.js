'use strict';

import gulp from 'gulp';
import del from 'del';

export default clean;

function clean() {
  return del(['./build']);
}
