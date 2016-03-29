'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentIcon = require('@economist/component-icon');

var _economistComponentIcon2 = _interopRequireDefault(_economistComponentIcon);

var BarWrapper = (function (_React$Component) {
  _inherits(BarWrapper, _React$Component);

  _createClass(BarWrapper, null, [{
    key: 'propTypes',
    value: {
      className: _react2['default'].PropTypes.string,
      classNamePrefix: _react2['default'].PropTypes.string,
      children: _react2['default'].PropTypes.node,
      close: _react2['default'].PropTypes.bool,
      renderCloseButton: _react2['default'].PropTypes.func,
      onClose: _react2['default'].PropTypes.func,
      stillRenderWhenClosed: _react2['default'].PropTypes.bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      close: true
    },
    enumerable: true
  }]);

  function BarWrapper() {
    _classCallCheck(this, BarWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _React$Component.call.apply(_React$Component, [this].concat(args));
    this.onClose = this.onClose.bind(this);
  }

  BarWrapper.prototype.onClose = function onClose(event) {
    if (event.button !== 0) {
      return;
    }
    if (event.ctrlKey) {
      return;
    }
    if (this.props.onClose) {
      this.props.onClose(event);
    }
    this.setState({ closed: true });
  };

  BarWrapper.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var classNamePrefix = _props.classNamePrefix;
    var children = _props.children;
    var close = _props.close;
    var onClose = _props.onClose;
    var stillRenderWhenClosed = _props.stillRenderWhenClosed;

    var classNames = ['bar-wrapper'];
    var closedClassNames = ['bar-wrapper--closed'];
    var containerClassNames = ['bar-wrapper--container'];
    var closeWrapperClassNames = ['bar-wrapper--close-wrapper'];
    var closeClassNames = ['bar-wrapper--close'];

    if (className) {
      classNames = classNames.concat([className]);
      closedClassNames = closedClassNames.concat([classNamePrefix + '--closed']);
      containerClassNames = containerClassNames.concat([classNamePrefix + '--container']);
      closeClassNames = closeClassNames.concat([classNamePrefix + '--close']);
      closeWrapperClassNames = closeWrapperClassNames.concat([classNamePrefix + '--close-wrapper']);
    }

    if (this.state && this.state.closed) {
      if (stillRenderWhenClosed) {
        classNames = classNames.concat(closedClassNames);
      } else {
        return _react2['default'].createElement('div', { className: closedClassNames.join(' ') });
      }
    }

    var closeButton = null;

    if (close) {
      var CloseButtonComponent = this.props.renderCloseButton || 'span';
      closeButton = _react2['default'].createElement(
        CloseButtonComponent,
        { onClick: this.onClose,
          className: closeWrapperClassNames.join(' '),
          tabIndex: 0
        },
        _react2['default'].createElement(_economistComponentIcon2['default'], { icon: 'close', className: closeClassNames.join(' ') })
      );
    }

    return _react2['default'].createElement(
      'div',
      { className: classNames.join(' ') },
      _react2['default'].createElement(
        'div',
        { className: containerClassNames.join(' ') },
        closeButton,
        children
      )
    );
  };

  return BarWrapper;
})(_react2['default'].Component);

exports['default'] = BarWrapper;
module.exports = exports['default'];