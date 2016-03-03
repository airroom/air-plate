'use strict';

import config from '../config.js';
import bs from 'browser-sync';
import morgan from 'morgan';

export default browserSync;

function browserSync(cb) {
  bs.init({
    server: {
      baseDir: config.destDir,
      middleware: morgan('dev'),
    },
  }, cb);
}
