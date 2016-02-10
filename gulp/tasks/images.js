'use strict';

import config from '../config.js';
import gulp from 'gulp';
import changed from 'gulp-changed';
import bs from 'browser-sync';

gulp.task(images);

function images() {
  return gulp.src(config.images.src)
  .pipe(changed(config.images.dest))
  .pipe(gulp.dest(config.images.dest))
  .pipe(bs.stream());
}
