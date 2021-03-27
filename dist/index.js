'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapRender = exports.transformComponents = exports.isStatelessComponent = undefined;

var _isStatelessComponent = require('./isStatelessComponent');

var _isStatelessComponent2 = _interopRequireDefault(_isStatelessComponent);

var _traverse = require('./traverse');

var _traverse2 = _interopRequireDefault(_traverse);

var _transformComponents = require('./transformComponents');

var _transformComponents2 = _interopRequireDefault(_transformComponents);

var _wrapRender = require('./wrapRender');

var _wrapRender2 = _interopRequireDefault(_wrapRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('weakmap-polyfill');

var __DEV__ = process && process.env && process.env.NODE_ENV === 'development';

exports.isStatelessComponent = _isStatelessComponent2.default;
exports.transformComponents = _transformComponents2.default;
exports.wrapRender = _wrapRender2.default;
exports.default = _traverse2.default;