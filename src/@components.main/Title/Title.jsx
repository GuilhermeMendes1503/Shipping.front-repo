import React from "react";

// import PropTypes from "prop-types";

import { Text } from "./Title.style"

const Title = ({ txt, ...props }) => {
  return (<Text>{txt}</Text>)
};

Title.propTypes = {


};

Title.defaultProps = {
};

export default Title;
