'use strict';

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import errorHandler from '../util/error-handler.js';
import gulpIf from 'gulp-if';
import bs from 'browser-sync';

gulp.task(styles);

function styles() {
  return gulp.src('./app/styles/**/*.scss')
  .pipe(plumber({ errorHandler }))
  .pipe(gulpIf(!global.isProd, sourcemaps.init()))
  .pipe(sass({
    sourceComments: !global.isProd,
    outputStyle: global.isProd ? 'compressed' : 'nested'
  }))
  .pipe(gulpIf(!global.isProd, sourcemaps.write()))
  .pipe(gulp.dest('./build/css'))
  .pipe(bs.stream());
}
