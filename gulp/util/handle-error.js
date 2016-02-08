'use strict';

import notify from 'gulp-notify';

export default function handleError(error) {
  let args = Array.prototype.slice.call(arguments);

  if (global.isProd) {
    console.log(error.message);
    process.exit(1);
    return;
  }

  notify.onError({
    title: '<%= error.plugin %>',
    message: '<%= error.message %>'
  }).apply(this, arguments);
  this.emit('end');
}
