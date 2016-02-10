'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import handleError from '../util/handle-error.js';
import gulpIf from 'gulp-if';
import bs from 'browser-sync';

gulp.task(styles);

function styles() {
  return gulp.src('./app/styles/**/*.scss')
  .pipe(plumber({
    errorHandler: handleError
  }))
  .pipe(gulpIf(!global.isProd, sourcemaps.init()))
  .pipe(sass({
    sourceComments: !global.isProd,
    outputStyle: global.isProd ? 'compressed' : 'nested'
  }))
  .pipe(gulpIf(!global.isProd, sourcemaps.write()))
  .pipe(gulp.dest('./build/css'))
  .pipe(bs.stream());
}
