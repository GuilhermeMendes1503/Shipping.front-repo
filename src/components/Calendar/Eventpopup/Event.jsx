import React, { useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Dialog, Select } from "evergreen-ui";
import {
  selectIsShown,
  selectTemplates,
  selectDate,
} from "../../../redux/api/api.selector";
import { setIsShown, requestPostEvent, requestEvents } from "../../../redux/api/api.reducer";
import Template from "./CustomTemplate";
import Button from "../../../@components.main/Button/Button2";
import { Form, Footer } from "./Event.style";
// import PropTypes from "prop-types";
const Event = (day, ...props) => {
  const dispatch = useDispatch();
  const isShown = useSelector(selectIsShown);
  const templates = useSelector(selectTemplates);
  const date = useSelector(selectDate);
  const [value, setValue] = React.useState(1);

  const formu = useRef("");

  const handleSubmit = () => {
    let eventProps = {};
    // console.log(value)
    eventProps['TemplateTitle'] = templates[value].name;
    var fields = formu.current.childNodes;
    for (let i = 3; i < fields.length - 1; i++) {
      eventProps[fields[i].textContent] = fields[i].lastChild.value;
    }
    const req = {
      date: date.toISOString().split("T")[0],
      eventProps: JSON.stringify(eventProps),
    };
    dispatch({
      type: requestPostEvent.type,
      payload: req,
    });
    dispatch({
      type: requestEvents.type,
    });
  };
  return (
    <>
      <Dialog
        isShown={isShown}
        title="Criar Evento"
        onCloseComplete={() =>
          dispatch({
            type: setIsShown.type,
            payload: false,
          })
        }
        hasFooter={false}
      >
        {templates && (
          <Form ref={formu}>
            {" "}
            <Select
              width={240}
              defaultValue={value}
              onChange={(e) => setValue(e.target.value)}
            >
              {templates.map((item, index) => {
                return (
                  <option key={item.id} value={index}>
                    {item.name}
                  </option>
                );
              })}
            </Select>
            <p></p>
            <Template values={JSON.parse(templates[value].field)} />
            <Footer>
              <Button
                title={"Criar"}
                onClick={handleSubmit}
              ></Button>
            </Footer>
          </Form>
        )}
      </Dialog>
    </>
  );
};

export default Event;
