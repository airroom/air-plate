'use strict';

import gulp from 'gulp';
import { Server } from 'karma';
import views from './views.js';

export default gulp.series(views, unit);

function unit(cb) {
  new Server({
    configFile: `${process.cwd()}/test/karma.conf.js`,
    autoWatch: global.isTestDev,
    singleRun: !global.isTestDev,
  }, cb).start();
}
