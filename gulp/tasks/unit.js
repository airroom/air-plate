'use strict';

import gulp from 'gulp';
import {Server}from 'karma';
import views from './views.js';

gulp.task('unit', gulp.series(views, unitTask));
gulp.task('unit:dev', gulp.series(views, unitDevTask));

function unitTask(cb) {
  new Server({
    configFile: process.cwd() + '/test/karma.conf.js',
    singleRun: true
  }).start();
  cb();
}

function unitDevTask() {
  new Server({
    configFile: process.cwd() + '/test/karma.conf.js',
    singleRun: false,
    autoWatch: true
  }).start();
  cb();
}
