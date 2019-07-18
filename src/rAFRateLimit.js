// Copyright © 2019 by Xitalogy.  MIT License.  http://opensource.org/licenses/MIT

function rAFRateLimit (func) {
  'use strict';

  if (typeof func !== 'function') {
    throw new TypeError('A single argument of type "function" is required.');
  }

  let rAFId = null;
  let wrapperArgs;

  function wrapper (timestamp) {
    func(...wrapperArgs, timestamp);
    rAFId = null;
  }

  return (...args) => {
    wrapperArgs = args;

    if (rAFId === null) {
      rAFId = window.requestAnimationFrame(wrapper);
    }
  };
}
