'use strict';

import config from '../config.js';
import gulp from 'gulp';
import changed from 'gulp-changed';
import gulpIf from 'gulp-if';
import rev from 'gulp-rev';
import rename from 'gulp-rename';
import bs from 'browser-sync';

export default fonts;

function fonts() {
  return gulp.src(config.fonts.src)
  .pipe(changed(config.fonts.dest))
  .pipe(gulpIf(global.isProd, rev()))
  .pipe(gulp.dest(config.fonts.dest))
  .pipe(gulpIf(global.isProd, rename((path) => path.dirname = '../fonts/' )))
  .pipe(gulpIf(global.isProd, rev.manifest({ merge: true })))
  .pipe(gulpIf(global.isProd, gulp.dest('.')))
  .pipe(bs.stream());
}
