import React from 'react';
import PropTypes from 'prop-types';
import { SvgLoader } from 'react-svgmt';
/**
 * Loading the svg file using react-svgmt
 * @param props
 * @returns {*}
 * @constructor
 */

var ReactSvgPanZoomLoader = function ReactSvgPanZoomLoader(props) {
  return React.createElement("div", null, props.render(React.createElement(SvgLoader, {
    path: props.src,
    svgXML: props.svgXML
  }, props.proxy)));
};

ReactSvgPanZoomLoader.defaultProps = {
  proxy: ""
};
ReactSvgPanZoomLoader.propTypes = {
  src: PropTypes.string,
  svgXML: PropTypes.string,
  render: PropTypes.func.isRequired,
  proxy: PropTypes.node
};
export { ReactSvgPanZoomLoader };