/*
 * Copyright © 2017 by IC3 Dimensions.  MIT License.  See LICENSE.MD
 */

function rAFRateLimit (func) {
  'use strict';

  var rAFId = null;

  return function (...args) {

    function wrapper (timestamp) {
      func(...(wrapper.args), timestamp);
      rAFId = null;
    }

    wrapper.args = args;

    if (rAFId === null) {
      rAFId = window.requestAnimationFrame(function (timestamp) {
        wrapper(timestamp);
        rAFId = null;
      });
    }
  };
}
