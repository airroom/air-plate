'use strict';

import gutil from 'gulp-util';
import prettyHrtime from 'pretty-hrtime';

let startTime;

export default {
  start() {
    startTime = process.hrtime();
    gutil.log(gutil.colors.green('Bundling'), '...');
  },

  end() {
    const taskTime = process.hrtime(startTime);
    const prettyTime = prettyHrtime(taskTime);
    gutil.log(gutil.colors.green('Bundled'), 'in', gutil.colors.magenta(prettyTime));
  },
};
