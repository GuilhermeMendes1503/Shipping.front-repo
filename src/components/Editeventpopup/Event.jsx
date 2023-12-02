// import React, { useRef } from "react";
import { Dialog, Select } from "evergreen-ui";

// import { setIsShown, requestPostEvent, requestEvents } from "../../../redux/api/api.reducer";
import Template from "./CustomTemplate";
// import Button from "../../../@components.main/Button/Button2";
import { Form, Footer } from "./Event.style";
// // import PropTypes from "prop-types";
// const Event = (day, ...props) => {
//   const dispatch = useDispatch();
//   const isShown = useSelector(selectIsShown);
//   const templates = useSelector(selectTemplates);
//   const date = useSelector(selectDate);

import React, { useRef } from "react";
import { useSelector } from "react-redux";

// import { Dialog } from "evergreen-ui";
import { Button, Button2 } from "../../@components.main/main";

import { selectTemplates } from "../../redux/api/api.selector";

const Event = (def, ...props) => {
  const formu = useRef("");
  const [isShown, setIsShown] = React.useState(false);
  const templates = useSelector(selectTemplates);
  const [value, setValue] = React.useState(1);

  return (
    <>
      {(() => {
        switch (def.itens.type) {
          case "edit": {
            return(
            <Dialog
              isShown={isShown}
              title="Editar Evento"
              onCloseComplete={() => setIsShown(false)}
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
                  <Template
                    values={templates[value]}
                    current={JSON.parse(def.itens.dict.event_props)}
                  />
                  <Footer>
                    <Button2
                      title={"Atualizar Evento"}
                      // onClick={}
                      bgcolor={"#ffa200"}
                    ></Button2>
                  </Footer>
                </Form>
              )}
            </Dialog>)
          }
          case "delete": {
            return(
              <Dialog
              isShown={isShown}
              title="Deletar Evento?"
              intent="danger"
              onCloseComplete={() => setIsShown(false)}
              confirmLabel="Delete"
            >
              Realmente deseja deletar esse item
            </Dialog>
            )
          }
          default:
            return <p>No option selected</p>;
        }
      })()}

      <Button
        icon={def.icon}
        size={def.size}
        h={def.h}
        w={def.w}
        onClick={() => setIsShown(true)}
      ></Button>
    </>
  );
};

export default Event;
