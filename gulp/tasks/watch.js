'use strict';

import config from '../config.js';
import gulp from 'gulp';

gulp.task(watch);

function watch() {
  gulp.watch([config.views.index, config.views.angular.src], gulp.series('views'));
  gulp.watch(config.styles.src, gulp.series('styles'));
  gulp.watch(config.images.src, gulp.series('images'));
  gulp.watch(config.fonts.src, gulp.series('fonts'));
}
