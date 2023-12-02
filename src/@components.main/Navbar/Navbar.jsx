import React from "react";
// import { faInstagram, faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Pane } from "evergreen-ui";
import { Toolbar, Button } from "./Navbar.style";
// import { } from "../@components.main/main"
// import { Auth } from "aws-amplify";
import SignUp from "../../components/SignUp";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();

  // const login = () => {
  //   Auth.signUp({
  //     email: "user@example.com",
  //     password: "P@ssw0rd",
  //     attributes: {
  //       email: "user@example.com",
  //     },
  //   })
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // };

  return (
    <Toolbar>
      <Pane padding="5px">
        <img src="./logo.png" alt="" height="80px" />
      </Pane>
      <Pane display="flex" justifyContent="left" width="80%" height="100%">
        <Button onClick={() => { navigate('/')}}>INICIO</Button>
        <Button onClick={() => { navigate('/eventos')}}>EVENTOS</Button>
        <Button onClick={() => { navigate('/templates')}}>TEMPLATES</Button>

        
      </Pane>
      <Pane margin-right="10px" display="flex">
        {/* <Button width="35px" ><FontAwesomeIcon icon={faInstagram} /></Button>
      <Button width="35px" ><FontAwesomeIcon icon={faTwitter} /></Button>
      <Button width="35px" ><FontAwesomeIcon icon={faFacebookF} /></Button> */}
      </Pane>
      <SignUp />
    </Toolbar>
  );
};

export default Navbar;
