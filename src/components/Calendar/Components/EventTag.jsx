import React from "react";

import PropTypes from "prop-types";
import {Tag} from "./EventTag.style"

const EventTag = ({ event, ...props }) => {
  const keys = Object.keys(event);
  // console.log(event)
  // return Object.keys(event).map((key,index) => {
    return (
      <Tag>{event[keys[0]]}</Tag>
    )
  // });
};

EventTag.propTypes = {
  event: PropTypes.object,
};

export default EventTag;
