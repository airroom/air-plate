'use strict';

import gulp from 'gulp';
import {Server} from 'karma';

export default unit;

function unit(cb) {
  new Server({
    configFile: process.cwd() + '/test/karma.conf.js',
    singleRun: true
  }).start();
  cb();
}
