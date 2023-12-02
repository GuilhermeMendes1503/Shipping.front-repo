import React,{useRef} from "react";
import { Amplify } from "aws-amplify";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Templates from "./pages/Templates";
import Eventos from "./pages/Eventos";
import { useDispatch } from "react-redux";
import { requestEvents } from "./redux/api/api.reducer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrashCan,
  faAngleLeft,
  faAngleRight,
  faPlus,
  faMinus,
  faMagnifyingGlassPlus,
  faMagnifyingGlassMinus,
  fa7,
  fa4,
  fa3,
  fa1,
  faPenToSquare,
  
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTrashCan,
  faAngleLeft,
  faAngleRight,
  faMagnifyingGlassPlus,
  faMagnifyingGlassMinus,
  faPlus,
  faMinus,
  fa7,
  fa4,
  fa3,
  fa1,
  faPenToSquare,
);

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: "us-east-2",
    userPoolId: "us-east-2_NusCwTxjs",
    userPoolWebClientId: "5fktk2cfeuqv8vcjmji404fa6v",
  },
});

const MyComponent = () => {
  const initialized = useRef(false);
  const dispatch = useDispatch();
  if (!initialized.current) {
    initialized.current = true;
    dispatch({
      type: requestEvents.type,
    });
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/templates" element={<Templates />} />
      </Routes>
    </>
  );
};

export default MyComponent;
