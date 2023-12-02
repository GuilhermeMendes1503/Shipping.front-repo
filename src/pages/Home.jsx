import {Navbar} from "../@components.main/main";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Calendar from "../components/Calendar/Calendar";
import { requestTemplates } from "../redux/api/api.reducer";

const Home = () => {
  const initialized = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      dispatch({
        type: requestTemplates.type,
      });
    }
  }, [dispatch]);

  return (
    <>
      <Navbar></Navbar>
      <Calendar />
    </>
  );
};
export default Home;
