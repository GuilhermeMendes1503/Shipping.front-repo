import React, { useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { TextInputField, Select, TextInput } from "evergreen-ui";
import { selectTemplates, selectDate } from "../redux/api/api.selector";
import { requestPostEvent, requestEvents } from "../redux/api/api.reducer";
import { Button, Button2, Navbar } from "../@components.main/main";
import { Form, Footer, HStack } from "./Templates.style";

const Template = (day, ...props) => {
  const dispatch = useDispatch();
  // const isShown = useSelector(selectIsShown);
  const templates = useSelector(selectTemplates);
  const date = useSelector(selectDate);
  const [value, setValue] = React.useState(0);
  const [newfield, setNewfield] = React.useState(0);
  const [templatedef, setTemplatedef] = React.useState(
    JSON.parse(templates[0].field)
  );

  const formu = useRef("");
  const handleSubmit = () => {
    let eventProps = {};
    // console.log(value)
    eventProps["TemplateTitle"] = templates[value].name;
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
  const handleSelector = (e) => {
    setTemplatedef(JSON.parse(templates[e.target.value].field));
    setValue(e.target.value)
  };

  const incrementCounter = () => {
    setNewfield(newfield + 1);
  };
  const decrementCounter = () => {
    if (newfield > 0) {
      setNewfield(newfield - 1);
    } else {
      // let currtemplate = JSON.parse(templates[value].field)
      const keys = Object.keys(templatedef);
      const lastKey = keys[keys.length - 1];
      delete templatedef[lastKey];
      setValue(value)
      // setTemplatedef(JSON.parse(newtemplate))
      // update()
      // setTemplatedef(newtemplate)
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div>
        {templates && (
          <Form ref={formu}>
            {" "}
            <Select
              width={240}
              defaultValue={value}
              onChange={(e) => handleSelector(e)}
            >
              {templates.map((item, index) => {
                return (
                  <option key={item.id} value={index}>
                    {item.name}
                  </option>
                );
              })}
            </Select>
            <TextInput
              key={value}
              defaultValue={templates[value].name}
              marginBottom="0px"
            />
            <p></p>
            {templatedef &&
              <div key={templatedef}>
                {Object.keys(templatedef).map((key, index) => {
                  return (
                    <HStack key={key}>
                      <TextInputField
                        key={index}
                        defaultValue={key}
                        marginBottom="0px"
                      />
                      <p key={index + 150}>:</p>
                      <TextInputField
                        key={templatedef[key]}
                        defaultValue={templatedef[key]}
                        marginBottom="0px"
                      />
                    </HStack>
                  );
                })}
              </div>
            }
            {Array.from({ length: newfield }, (_, index) => (
              <HStack key={index + 100}>
                <TextInputField key={index + 50} marginBottom="0px" />
                <p key={index + 150}>:</p>
                <TextInputField key={index} marginBottom="0px" />
              </HStack>
            ))}
            <HStack>
              <Button icon={"fa-plus"} onClick={incrementCounter} />
              <Button
                icon={"fa-minus"}
                onClick={() => {
                  decrementCounter();
                }}
              />
            </HStack>
            <Footer>
              <Button2 title={"Criar"} onClick={handleSubmit}></Button2>
            </Footer>
          </Form>
        )}
      </div>
    </>
  );
};

export default Template;
