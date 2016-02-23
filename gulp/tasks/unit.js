'use strict';

import config from '../config';
import gulp from 'gulp';
import {Server}from 'karma';
import views from './views.js';

gulp.task('unit', gulp.series(views, unit));
gulp.task('unit:dev', gulp.series(views, unitDev));

function unit() {
  new Server({
    configFile: process.cwd() + '/test/karma.conf.js',
    singleRun: true
  }).start();
}

function unitDev() {
  new Server({
    configFile: process.cwd() + '/test/karma.conf.js',
    singleRun: false,
    autoWatch: true
  }).start();
}
