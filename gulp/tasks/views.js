'use strict';

import config from '../config.js';
import gulp from 'gulp'
import plumber from 'gulp-plumber';
import htmlmin from 'gulp-htmlmin';
import templateCache from 'gulp-angular-templatecache';
import bs from 'browser-sync';
import errorHandler from '../util/error-handler.js';

gulp.task('views', gulp.parallel(index, angularViews));

function index() {
  return gulp.src(config.views.index)
  .pipe(plumber({ errorHandler }))
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: false
  }))
  .pipe(gulp.dest(config.destDir))
  .pipe(bs.stream());
}

function angularViews() {
  return gulp.src(config.views.angular.src)
  .pipe(plumber({ errorHandler }))
  .pipe(templateCache({
    standalone: true
  }))
  .pipe(gulp.dest(config.views.angular.dest))
  .pipe(bs.stream());
}
