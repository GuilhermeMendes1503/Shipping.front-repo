import Navbar from "../@components.main/Navbar/Navbar";
import React from "react";
import { useSelector } from "react-redux";

import { selectTemplates } from "../redux/api/api.selector";

const Home = () => {
  const templates = useSelector(selectTemplates);
  return (
    <>
      <Navbar></Navbar>
      {templates.map((item, index) => {
        return <p key={item.id}> {item.name} {item.field}</p>;
      })}
    </>
  );
};
export default Home;
