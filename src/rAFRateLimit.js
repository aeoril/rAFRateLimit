/*
 * Copyright © 2017 by IC3 Dimensions.  MIT License.  See LICENSE.MD
 */

function rAFRateLimit (func) {
  'use strict';

  if (typeof func !== 'function') {
    throw new TypeError('A single argument of type "function" is required.')
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
