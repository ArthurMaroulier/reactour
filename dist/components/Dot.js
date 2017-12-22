'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  counter-increment: dot;\n  width: 8px;\n  height: 8px;\n  border: 1px solid;\n  border-radius: 100%;\n  padding: 0;\n  display: block;\n  margin: 4px;\n  outline: 0;\n  transition: opacity .3s, transform .3s;\n  cursor: ', ';\n  transform: scale(', ');\n  color: ', ';\n  background-color: ', ';\n  \n  &:before {\n    content: counter(dot);\n    position: absolute;\n    bottom: calc(100% + .25em);\n    left: 50%;\n    opacity: 0;\n    transform: translate(-50%, 1em);\n    transition: .3s;\n    display: ', ';\n  }\n  \n  &:hover {\n    background-color: currentColor;\n    \n    &:before {\n      opacity: .5;\n      transform: translate(-50%, -2px);\n    }\n  }\n'], ['\n  counter-increment: dot;\n  width: 8px;\n  height: 8px;\n  border: 1px solid;\n  border-radius: 100%;\n  padding: 0;\n  display: block;\n  margin: 4px;\n  outline: 0;\n  transition: opacity .3s, transform .3s;\n  cursor: ', ';\n  transform: scale(', ');\n  color: ', ';\n  background-color: ', ';\n  \n  &:before {\n    content: counter(dot);\n    position: absolute;\n    bottom: calc(100% + .25em);\n    left: 50%;\n    opacity: 0;\n    transform: translate(-50%, 1em);\n    transition: .3s;\n    display: ', ';\n  }\n  \n  &:hover {\n    background-color: currentColor;\n    \n    &:before {\n      opacity: .5;\n      transform: translate(-50%, -2px);\n    }\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Dot = _styledComponents2.default.button(_templateObject, function (props) {
  return props.current === props.index ? 'default' : 'pointer';
}, function (props) {
  return props.current === props.index ? 1.25 : 1;
}, function (props) {
  return props.current === props.index ? 'var(--reactour-accent)' : '#caccce';
}, function (props) {
  return props.current === props.index ? 'var(--reactour-accent)' : 'transparent';
}, function (props) {
  return props.showNumber ? 'block' : 'none';
});

exports.default = Dot;