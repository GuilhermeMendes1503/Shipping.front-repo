import { useEffect, useState } from "react";
import moment from "moment";
import "./Calendar.scss";
import { Days } from "./CalendarStyled";
import calendarBuild from "./CalendarBuild";
import { Button, Title } from "../../@components.main/main";
import { useSwipe } from "../../@functions.main/useSwipe";
import { useDispatch, useSelector } from "react-redux";
import { setIsShown, setSelectedDate } from "../../redux/api/api.reducer";
import Event from "./Eventpopup/Event";
import { selectEvents } from "../../redux/api/api.selector";
import EventTag from "./Components/EventTag";
export default function Calendar(props) {
  var time = new Date();
  var currentTime = new Date(time.toISOString().slice(0, 10));
  // const [currentYear, setCurrentYear] = useState(2022);
  const [currentYear, setCurrentYear] = useState(currentTime.getFullYear());
  // const [currentMonth, setCurrentMonth] = useState(10);
  const [currentMonth, setCurrentMonth] = useState(currentTime.getMonth());

  const [dateSelected, setDateSelected] = useState([]);

  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6);
  function onSwipeLeft() {
    handleMonthChange(currentMonth, "add");
  }

  function onSwipeRight() {
    handleMonthChange(currentMonth, "sub");
  }

  const handleMonthChange = (month, direction) => {
    switch (month) {
      case 11:
        setCurrentMonth(direction === "add" ? 0 : 10);
        setCurrentYear(currentYear + (direction === "add" ? 1 : 0));
        break;
      case 0:
        setCurrentMonth(direction === "add" ? 1 : 11);
        setCurrentYear(currentYear + (direction === "sub" ? -1 : 0));
        break;
      default:
        setCurrentMonth(currentMonth + (direction === "add" ? 1 : -1));
    }
  };

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  moment.updateLocale("pt", {
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
  });

  return (
    <div id="calendar-page" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="header-page">
        <Button
          size="2x"
          onClick={() => handleMonthChange(currentMonth, "sub")}
          icon={"fa-angle-left"}
          // title="sdfasdf"
        ></Button>
        <Title txt={`${currentYear} ${month[currentMonth]}`}></Title>
        <Button
          size="2x"
          onClick={() => handleMonthChange(currentMonth, "add")}
          icon={"fa-angle-right"}
        ></Button>
      </div>
      <div className="content">
        <Event />
        <MonthCard
          key={month[currentMonth]}
          month={month[currentMonth]}
          currentYear={currentYear}
          dateSelected={dateSelected}
          setDateSelected={setDateSelected}
        />
      </div>
    </div>
  );
}

function MonthCard(props) {
  const [value, setValue] = useState(
    moment().locale("pt").month(props.month).year(props.currentYear)
  );
  const [calendar, setCalendar] = useState([]);
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

  useEffect(() => {
    setValue(value.year(props.currentYear));
    setCalendar(calendarBuild(value));
  }, [value, props.currentYear]);

  return (
    <div id="month-card">
      <div className="week-days">
        {weekDays.map((value, index) => (
          <div className="week-day" key={index}>
            {value}
          </div>
        ))}
      </div>
      {calendar.map((week) => (
        <div className="week" key={week}>
          {week.map((day) => (
            <DayCard
              key={day._d.getTime() + props.month}
              day={day}
              month={props.month}
              year={props.currentYear}
              dateSelected={props.dateSelected}
              setDateSelected={props.setDateSelected}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function DayCard(props) {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const day = props.day._d;
  // console.log(typeof(day))
  // console.log(day)
  const events = useSelector(selectEvents);

  useEffect(() => {
    const currentMonth = new Date(props.month + ",01," + props.year);
    var currentTime = new Date();

    if (day.getMonth() !== currentMonth.getMonth()) {
      setState("nonPertenceMonth");
      return;
    }

    if (
      day.toDateString() === currentTime.toDateString() &&
      !props.dateSelected.find((value) => value.getTime() === day.getTime())
    ) {
      setState("today");
      return;
    }

    if (props.dateSelected.find((value) => value.getTime() === day.getTime())) {
      setState("selected");
    } else {
      setState("");
    }
  }, [day, props.month, props.year, props.dateSelected]);

  const handleClickDate = () => {
    if (state !== "nonPertenceMonth")
      dispatch({
        type: setIsShown.type,
        payload: true,
      });
    dispatch({
      type: setSelectedDate.type,
      payload: day,
    });
    if (props.dateSelected.find((value) => value.getTime() === day.getTime())) {
      setState("");
      props.setDateSelected(
        props.dateSelected.filter((value) => value.getTime() !== day.getTime())
      );
    } else {
      setState("selected");
      props.setDateSelected([...props.dateSelected, day]);
    }
  };

  function getEventsByDate(date, events) {
    return events.filter((event) => {
      return event.date.split("T")[0].startsWith(date);
    });
  }
  return (
    <Days state={state} onClick={handleClickDate}>
      {props.day.format("DD").toString()}
      {events && getEventsByDate(props.day.format("YYYY-MM-DD").toString(), events).map(
        (event, index) => {
          return (event.event_props && <EventTag key={index} event={JSON.parse(event.event_props)}></EventTag>);
        }
      )}
    </Days>
  );
}
