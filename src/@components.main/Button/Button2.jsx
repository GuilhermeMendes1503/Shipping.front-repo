import React from "react";

import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonStyle } from "./Button2.style";

const Button = ({ title, icon, ...props }) => {
  return (
    <ButtonStyle {...props}>
        <p>{title}</p>
    </ButtonStyle>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

Button.defaultProps = {};

export default Button;
