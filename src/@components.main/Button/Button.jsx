import React from "react";

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonStyle, HStack, P } from "./Button.style";

const Button = ({ title, icon,size, ...props }) => {
  return (
    <ButtonStyle {...props}>
      <HStack>
        {icon && <FontAwesomeIcon icon={icon} size={size ? size : '2x'}/>}

        <P>{title}</P>
      </HStack>
    </ButtonStyle>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

Button.defaultProps = {};

export default Button;
