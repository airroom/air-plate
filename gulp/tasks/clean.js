'use strict';

import gulp from 'gulp';
import del from 'del';

gulp.task(clean);

function clean() {
  return del(['./build']);
}
