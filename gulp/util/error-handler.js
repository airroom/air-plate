'use strict';

import notify from 'gulp-notify';

export default function errorHandler(error) {
  if (global.isProd) {
    console.log(error.message);
    process.exit(1);
    return;
  }

  notify.onError({
    title: '<%= error.plugin %>',
    message: '<%= error.message %>'
  }).call(this, error);
  this.emit('end');
}
