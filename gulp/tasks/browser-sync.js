'use strict';

import config from '../config.js';
import gulp from 'gulp';
import bs from 'browser-sync';
import morgan from 'morgan';

gulp.task(browserSync);

function browserSync(cb) {
  bs.init({
    server: {
      baseDir: config.destDir,
      middleware: morgan('dev')
    },
  }, cb);
}
