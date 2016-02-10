'use strict';

import gulp from 'gulp';
import changed from 'gulp-changed';
import bs from 'browser-sync';

gulp.task(fonts);

function fonts() {
  return gulp.src('./app/fonts/**/*')
  .pipe(changed('./build/fonts'))
  .pipe(gulp.dest('./build/fonts'))
  .pipe(bs.stream());
}
