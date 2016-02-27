'use strict';

import config from '../config.js';
import gulp from 'gulp';
import views from './views.js';
import styles from './styles.js';
import images from './images.js';
import fonts from './fonts.js';

export default watch;

function watch() {
  gulp.watch([config.views.index, config.views.angular.src], views);
  gulp.watch(config.styles.src, styles);
  gulp.watch(config.images.src, images);
  gulp.watch(config.fonts.src, fonts);
}
