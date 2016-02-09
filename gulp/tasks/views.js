'use strict';

import gulp from 'gulp'
import templateCache from 'gulp-angular-templatecache';
import handleError from '../util/handle-error.js';

gulp.task(views);

function views() {
  return gulp.src('./app/views/**/*.html')
  .on('error', handleError)
  .pipe(templateCache({
    standalone: true
  }))
  .pipe(gulp.dest('./app/js'))
}
