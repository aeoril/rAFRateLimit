/*
 * Copyright © 2017 by IC3 Dimensions.  MIT License.  See LICENSE.MD
 */

function rAFRateLimit (func) {
  'use strict';

  var rAFId = null;
  var currentArgs;

  return function (args) {

    currentArgs = args;

    if (rAFId === null) {
      rAFId = window.requestAnimationFrame(function (timestamp) {
        func(timestamp);
        rAFId = null;
      });
    }
  };
}
