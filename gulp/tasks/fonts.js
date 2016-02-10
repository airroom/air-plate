'use strict';

import config from '../config.js';
import gulp from 'gulp';
import changed from 'gulp-changed';
import bs from 'browser-sync';

gulp.task(fonts);

function fonts() {
  return gulp.src(config.fonts.src)
  .pipe(changed(config.fonts.dest))
  .pipe(gulp.dest(config.fonts.dest))
  .pipe(bs.stream());
}
