'use strict';

import gulp from 'gulp'
import plumber from 'gulp-plumber';
import htmlmin from 'gulp-htmlmin';
import templateCache from 'gulp-angular-templatecache';
import bs from 'browser-sync';
import errorHandler from '../util/error-handler.js';

gulp.task('views', gulp.parallel(index, angularViews));

function index() {
  return gulp.src('./app/index.html')
  .pipe(plumber({ errorHandler }))
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: false
  }))
  .pipe(gulp.dest('./build'))
  .pipe(bs.stream());
}

function angularViews() {
  return gulp.src('./app/views/**/*.html')
  .pipe(plumber({ errorHandler }))
  .pipe(templateCache({
    standalone: true
  }))
  .pipe(gulp.dest('./app/js'))
  .pipe(bs.stream());
}
