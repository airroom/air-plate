'use strict';

import config from '../config';
import gulp from 'gulp';
import {Server}from 'karma';
import views from './views.js';

gulp.task('unit', gulp.series(views, karma));

function karma() {
  new Server({
    configFile: process.cwd() + '/test/karma.conf.js'
  }).start();
}
