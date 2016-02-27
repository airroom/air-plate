'use strict';

import config from '../config.js'
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

const postCssProcessors = [
  autoprefixer({ browsers: ['> 10%'] }),
  mqpacker
];

export default styles;

function styles() {
  return gulp.src(config.styles.src)
  .pipe(plumber({ errorHandler }))
  .pipe(gulpIf(!global.isProd, sourcemaps.init()))
  .pipe(sass({
    sourceComments: !global.isProd,
    outputStyle: global.isProd ? 'compressed' : 'nested',
    includePaths: config.styles.sassIncludePaths
  }))
  .pipe(postcss(postCssProcessors))
  .pipe(gulpIf(!global.isProd, sourcemaps.write()))
  .pipe(gulp.dest(config.styles.dest))
  .pipe(bs.stream());
}
