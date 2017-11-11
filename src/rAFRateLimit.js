/*
 * Copyright © 2017 by IC3 Dimensions.  MIT License.  See LICENSE.MD
 */

function rAFRateLimit (func, duration) {
  'use strict';

  var rAFId = null;

  return function (...args) {
    if (rAFId) {
      window.cancelAnimationFrame(rAFId);
    }

    rAFId = window.requestAnimationFrame(function (timestamp) {
      func(...args, timestamp);
      rAFId = null;
    });
  };
}
