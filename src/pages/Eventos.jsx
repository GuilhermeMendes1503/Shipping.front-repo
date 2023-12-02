import { Navbar } from "../@components.main/main";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  EventCard,
  Event,
  Title,
  EventProps,
  VStack,
  Controls,
} from "./Eventos.style";
import DatePicker from "react-datepicker";
import { selectEvents, selectTemplates } from "../redux/api/api.selector";
// import { setEventedit } from "../redux/api/api.reducer";
import DialogAction from "../components/Editeventpopup/Event";
import "../Stylesheets/customcalendar.css";
import { Button2 } from "../@components.main/main";
import { SelectField } from "evergreen-ui";

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = React.useState(0);
  // const dispatch = useDispatch();
  const handleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    end && setIsOpen(!isOpen);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const templates = useSelector(selectTemplates);
  const events = useSelector(selectEvents);


  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    const event_prop = JSON.parse(event.event_props);
    // console.log(eventDate.toISOString().split("T")[0])
    return (
      ((!startDate && !endDate) ||
        (eventDate.toISOString().split("T")[0] >=
          startDate.toISOString().split("T")[0] &&
          (!endDate ||
            eventDate.toISOString().split("T")[0] <=
              endDate.toISOString().split("T")[0]))) &&
      (!templates[value] || event_prop.TemplateTitle === templates[value].name)
    );
  });

  // const handleEdit = (index) =>{
  //   dispatch({
  //     type: setEventedit.type,
  //     payload: events.event_props,
  //   });
  //   // dispatch({
  //   //   type: setIsShown.type,
  //   //   payload: true,
  //   // });
  // }

  return (
    <Event>
      <Navbar></Navbar>
      <VStack>
        <Button2
          fontcolor={"gray"}
          title={`${startDate ? startDate.toISOString().split("T")[0] : ""} | ${
            endDate ? endDate.toISOString().split("T")[0] : ""
          }`}
          onClick={handleClick}
        ></Button2>
        {isOpen && (
          <DatePicker
          selected={null}
          onChange={handleChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
          />
        )}
        <SelectField
          label="Tipo do evento"
          marginBottom="0px"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value={"Todos"}>{"Todos"}</option>
          {templates.map((item, index) => {
            return (
              <option key={item.id} value={index}>
                {item.name}
              </option>
            );
          })}
        </SelectField>
        {/* <Button2 bgcolor={"#ffa200"} title="Filtrar"></Button2> */}
      </VStack>

      {filteredEvents &&
        filteredEvents.map((item, index) => {
          const event_prop = JSON.parse(item.event_props);
          const eventValues = Object.keys(event_prop).slice(1);
          return (
            <EventCard key={item.id}>
              <Title>
                {item.date.split("T")[0]} | {event_prop.TemplateTitle}
              </Title>

              <VStack>
                <EventProps>
                  {eventValues.map((prop, idx) => (
                    <p key={idx}>
                      <strong>{prop}</strong> : {event_prop[prop]}
                    </p>
                  ))}
                </EventProps>
                <Controls>
                  <DialogAction icon="fa-pen-to-square" size="1x" h={"unset"} w={"unset"} itens={{'type':'edit', 'dict':events[index]}}/>
                  <DialogAction icon="fa-trash-can" size="1x" h={"unset"} w={"unset"} itens={{'type':'delete', 'dict':events[index]}}/>
                  {/* <Button  onClick={handleEdit(index)}></Button> */}
                </Controls>
              </VStack>
            </EventCard>
          );
        })}
    </Event>
  );
};

export default Home;
