/**
 * Copyright (c) 2015-present, spacekick
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

/* eslint func-names: 0 */
/* global describe: false, it: false */

const mocha = require('../index');

describe('mocha', function () {
  it('should run test files', function () {
    return mocha('../__meta_test__/*.test.js', true);
  });
});