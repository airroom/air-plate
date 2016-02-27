'use strict';

import config from '../config.js';
import gulp from 'gulp'
import plumber from 'gulp-plumber';
import changed from 'gulp-changed';
import htmlmin from 'gulp-htmlmin';
import templateCache from 'gulp-angular-templatecache';
import merge from 'merge-stream';
import bs from 'browser-sync';
import errorHandler from '../util/error-handler.js';

export default views;

function views() {
  const index = gulp.src(config.views.index)
  .pipe(changed(config.destDir))
  .pipe(plumber({ errorHandler }))
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: false
  }))
  .pipe(gulp.dest(config.destDir))
  .pipe(bs.stream());

  const angularViews = gulp.src(config.views.angular.src)
  .pipe(plumber({ errorHandler }))
  .pipe(templateCache({
    standalone: true
  }))
  .pipe(gulp.dest(config.views.angular.dest));

  return merge(index, angularViews)
}
