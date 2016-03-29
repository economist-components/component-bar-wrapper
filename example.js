'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('./');

var _2 = _interopRequireDefault(_);

// this ensures the cookie is never written
var fakeCookie = {
  load: function load() {},
  save: function save() {}
};
exports['default'] = _react2['default'].createElement(
  _2['default'],
  { onClose: function () {
      alert('you just clicked close!');
    } },
  'Hello! I\'m inside a barwrapper! The background and this text color came from the example CSS.'
);
module.exports = exports['default'];