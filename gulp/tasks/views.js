'use strict';

import gulp from 'gulp'
import htmlmin from 'gulp-htmlmin';
import templateCache from 'gulp-angular-templatecache';
import bs from 'browser-sync';
import handleError from '../util/handle-error.js';

gulp.task('views', gulp.parallel(index, angularViews));

function index() {
  return gulp.src('./app/index.html')
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: false
  }))
  .pipe(gulp.dest('./build'))
  .pipe(bs.stream());
}

function angularViews() {
  return gulp.src('./app/views/**/*.html')
  .on('error', handleError)
  .pipe(templateCache({
    standalone: true
  }))
  .pipe(gulp.dest('./app/js'))
  .pipe(bs.stream());
}
