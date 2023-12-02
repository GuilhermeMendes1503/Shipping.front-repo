import React from "react";

import PropTypes from "prop-types";
import { TextInputField } from "evergreen-ui";


const Template = ({ values, ...props }) => {
  return Object.keys(values).map((key,index) => {
    return <TextInputField key={index} label={key} />;
  });
};

Template.propTypes = {
  values: PropTypes.object,
};

export default Template;
