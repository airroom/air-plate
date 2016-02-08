'use strict';

import notify from 'gulp-notify';

export default function showError(error) {
  let args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: '<%= error.plugin %>',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end');
}
