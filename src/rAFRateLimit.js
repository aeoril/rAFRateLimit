/*
 * Copyright © 2017 by IC3 Dimensions.  MIT License.  See LICENSE.MD
 */

function rAFRateLimit (func) {
  'use strict';

  var rAFId = null;

  return function (args) {

    func.args = args;

    if (rAFId === null) {
      rAFId = window.requestAnimationFrame(function (timestamp) {
        func(timestamp);
        rAFId = null;
      });
    }
  };
}
