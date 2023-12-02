import React from "react";

import PropTypes from "prop-types";
import { TextInputField } from "evergreen-ui";


const Template = ({ values, current, ...props }) => {
  return Object.keys(JSON.parse(values.field)).map((key,index) => {
    return <TextInputField key={index} label={key} defaultValue={current ? current.TemplateTitle === values.name ? current[key]: '' : ''} />;
  });
};

Template.propTypes = {
  values: PropTypes.object,
};

export default Template;
