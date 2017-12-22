'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  font-family: monospace;\n  background-color: var(--reactour-accent);\n  height: 1.875em;\n  line-height: 2;\n  padding-left: .8125em;\n  padding-right: .8125em;\n  font-size: 1em;\n  border-radius: 1.625em;\n  color: white;\n  text-align: center;\n  box-shadow: 0 .25em .5em rgba(0,0,0,.3);\n  top: -.8125em;\n  left: -.8125em;\n'], ['\n  position: absolute;\n  font-family: monospace;\n  background-color: var(--reactour-accent);\n  height: 1.875em;\n  line-height: 2;\n  padding-left: .8125em;\n  padding-right: .8125em;\n  font-size: 1em;\n  border-radius: 1.625em;\n  color: white;\n  text-align: center;\n  box-shadow: 0 .25em .5em rgba(0,0,0,.3);\n  top: -.8125em;\n  left: -.8125em;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Badge = _styledComponents2.default.span(_templateObject);

exports.default = Badge;