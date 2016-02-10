'use strict';

import gulp from 'gulp';
import changed from 'gulp-changed';
import bs from 'browser-sync';

gulp.task(images);

function images() {
  return gulp.src('./app/images/**/*')
  .pipe(changed('./build/images'))
  .pipe(gulp.dest('./build/images'))
  .pipe(bs.stream());
}
