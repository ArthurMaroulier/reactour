'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 12px;\n  line-height: 1;\n'], ['\n  font-size: 12px;\n  line-height: 1;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  cursor: pointer;\n  \n  color: ', ';\n  \n  ', ';\n  ', ';\n  \n  &:hover {\n    color: ', ';\n  }\n'], ['\n  display: block;\n  cursor: pointer;\n  \n  color: ', ';\n  \n  ', ';\n  ', ';\n  \n  &:hover {\n    color: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SvgButton = require('./SvgButton');

var _SvgButton2 = _interopRequireDefault(_SvgButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = _styledComponents2.default.span(_templateObject);

var Arrow = function Arrow(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      inverted = _ref.inverted,
      label = _ref.label;
  return _react2.default.createElement(
    _SvgButton2.default,
    { className: className, onClick: onClick },
    label ? _react2.default.createElement(
      Label,
      { className: 'c-reactour__arrow--label' },
      label
    ) : _react2.default.createElement(
      'svg',
      { viewBox: '0 0 18.4 14.4' },
      _react2.default.createElement('path', {
        d: inverted ? 'M17 7.2H1M10.8 1L17 7.2l-6.2 6.2' : 'M1.4 7.2h16M7.6 1L1.4 7.2l6.2 6.2',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeMiterlimit: '10'
      })
    )
  );
};

var StyledArrow = (0, _styledComponents2.default)(Arrow)(_templateObject2, function (props) {
  return props.disabled ? '#caccce' : '#646464';
}, function (props) {
  return props.inverted ? 'margin-left: 24px;' : 'margin-right: 24px;';
}, function (props) {
  return !props.label && '\n    width: 16px;\n    height: 12px;\n    flex: 0 0 16px;\n  ';
}, function (props) {
  return props.disabled ? '#caccce' : '#000';
});

exports.default = StyledArrow;