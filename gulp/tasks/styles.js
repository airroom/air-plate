'use strict';

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import gulpIf from 'gulp-if';
import autoprefixer from 'autoprefixer';
import mqpacker from 'css-mqpacker';
import errorHandler from '../util/error-handler.js';
import bs from 'browser-sync';

const processors = [
  autoprefixer({ browsers: ['> 10%'] }),
  mqpacker
];

gulp.task(styles);

function styles() {
  return gulp.src('./app/styles/**/*.scss')
  .pipe(plumber({ errorHandler }))
  .pipe(gulpIf(!global.isProd, sourcemaps.init()))
  .pipe(sass({
    sourceComments: !global.isProd,
    outputStyle: global.isProd ? 'compressed' : 'nested',
  }))
  .pipe(postcss(processors))
  .pipe(gulpIf(!global.isProd, sourcemaps.write()))
  .pipe(gulp.dest('./build/css'))
  .pipe(bs.stream());
}
