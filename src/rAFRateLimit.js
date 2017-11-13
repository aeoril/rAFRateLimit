/*
 * Copyright © 2017 by IC3 Dimensions.  MIT License.  See LICENSE.MD
 */

function rAFRateLimit (func) {
  'use strict';

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
