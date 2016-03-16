'use strict';

import config from '../config.js';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import rev from 'gulp-rev';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import gulpIf from 'gulp-if';
import revReplace from 'gulp-rev-replace';
import autoprefixer from 'autoprefixer';
import mqpacker from 'css-mqpacker';
import errorHandler from '../util/error-handler.js';
import bs from 'browser-sync';

const postCssProcessors = [
  autoprefixer({ browsers: ['> 10%'] }),
  mqpacker,
];

export default styles;

function styles() {
  const revManifest = global.isProd
                      ? gulp.src('./rev-manifest.json')
                      : null;

  return gulp.src(config.styles.src)
  .pipe(plumber({ errorHandler }))
  .pipe(gulpIf(!global.isProd, sourcemaps.init()))
  .pipe(sass({
    sourceComments: !global.isProd,
    outputStyle: global.isProd ? 'compressed' : 'nested',
    includePaths: config.styles.sassIncludePaths,
  }))
  .pipe(gulpIf(global.isProd, revReplace({ manifest: revManifest })))
  .pipe(postcss(postCssProcessors))
  .pipe(gulpIf(!global.isProd, sourcemaps.write()))
  .pipe(gulpIf(global.isProd, rev()))
  .pipe(gulp.dest(config.styles.dest))
  .pipe(gulpIf(global.isProd, rename((path) => path.dirname = '/css/' )))
  .pipe(gulpIf(global.isProd, rev.manifest({ merge: true })))
  .pipe(gulpIf(global.isProd, gulp.dest('.')))
  .pipe(bs.stream());
}
