'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isStatelessComponent;
function isStatelessComponent(type) {
  return typeof type.render !== 'function';
}