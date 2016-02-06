'use strict';

import gulp from 'gulp';
import del from 'del';

gulp.task('clean:build', cleanBuild);

function cleanBuild() {
  return del(['build']);
}
