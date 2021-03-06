"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactSvgPanZoomLoader = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSvgmt = require("react-svgmt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Loading the svg file using react-svgmt
 * @param props
 * @returns {*}
 * @constructor
 */
var ReactSvgPanZoomLoader = function ReactSvgPanZoomLoader(props) {
  return _react.default.createElement("div", null, props.render(_react.default.createElement(_reactSvgmt.SvgLoader, {
    path: props.src,
    svgXML: props.svgXML
  }, props.proxy)));
};

exports.ReactSvgPanZoomLoader = ReactSvgPanZoomLoader;
ReactSvgPanZoomLoader.defaultProps = {
  proxy: ""
};
ReactSvgPanZoomLoader.propTypes = {
  src: _propTypes.default.string,
  svgXML: _propTypes.default.string,
  render: _propTypes.default.func.isRequired,
  proxy: _propTypes.default.node
};