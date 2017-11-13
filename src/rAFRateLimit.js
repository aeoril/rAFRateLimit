/*
 * Copyright © 2017 by IC3 Dimensions.  MIT License.  See LICENSE.MD
 */

function rAFRateLimit (func) {
  'use strict';

  var rAFId = null;

  function wrapper (timestamp) {
    func(...(wrapper.args), timestamp);
    rAFId = null;
  }

  return function (...args) {

    wrapper.args = args;

    if (rAFId === null) {
      rAFId = window.requestAnimationFrame(wrapper);
    }
  };
}
