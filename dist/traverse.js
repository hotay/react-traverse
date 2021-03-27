'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultTraverse = undefined;
exports.kindOf = kindOf;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function kindOf(node) {
  if (node === null || node === void 0 || typeof node === 'boolean') {
    return 'Empty';
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return 'Text';
  }
  if (Array.isArray(node)) {
    return 'Fragment';
  }
  var type = node.type;

  if (typeof type === 'string') {
    return 'DOMElement';
  }
  return 'ComponentElement';
}

function _defaultTraverse(path) {
  var kind = kindOf(path.node);
  if (kind === 'Empty') {
    return path.node;
  }
  if (kind === 'Text') {
    return path.node;
  }
  if (kind === 'Fragment') {
    return path.node.map(path.traverse);
  }
  return _react2.default.cloneElement.apply(_react2.default, [path.node, path.node.props].concat(_toConsumableArray(path.traverseChildren())));
}

exports.defaultTraverse = _defaultTraverse;
function _traverse(node, visitor) {
  var _visitor$Empty = visitor.Empty,
      Empty = _visitor$Empty === undefined ? _defaultTraverse : _visitor$Empty,
      _visitor$Text = visitor.Text,
      Text = _visitor$Text === undefined ? _defaultTraverse : _visitor$Text,
      _visitor$Fragment = visitor.Fragment,
      Fragment = _visitor$Fragment === undefined ? _defaultTraverse : _visitor$Fragment,
      _visitor$DOMElement = visitor.DOMElement,
      DOMElement = _visitor$DOMElement === undefined ? _defaultTraverse : _visitor$DOMElement,
      _visitor$ComponentEle = visitor.ComponentElement,
      ComponentElement = _visitor$ComponentEle === undefined ? _defaultTraverse : _visitor$ComponentEle;

  var path = {
    node: node,
    kindOf: kindOf,
    defaultTraverse: function defaultTraverse() {
      return _defaultTraverse(path);
    },
    traverse: function traverse(childNode) {
      var childVisitor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : visitor;

      return _traverse(childNode, childVisitor);
    },
    traverseChildren: function traverseChildren() {
      var childVisitor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : visitor;

      return _react2.default.Children.toArray(path.node.props.children).map(function (childNode) {
        return path.traverse(childNode, childVisitor);
      });
    },

    visitor: visitor
  };
  if (node === null || node === void 0 || typeof node === 'boolean') {
    return Empty(path); // eslint-disable-line new-cap
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return Text(path); // eslint-disable-line new-cap
  }
  if (Array.isArray(node)) {
    return Fragment(path); // eslint-disable-line new-cap
  }
  var type = node.type;

  if (typeof type === 'string') {
    return DOMElement(path); // eslint-disable-line new-cap
  }
  return ComponentElement(path); // eslint-disable-line new-cap
}
exports.default = _traverse;