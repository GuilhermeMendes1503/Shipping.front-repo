import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  Pane,
  Dialog,
  // mergeTheme,
} from "evergreen-ui";
import { Login } from "./SignUp.style";
// import { Auth } from "aws-amplify";

const SignUp = () => {
  const [isShown, setIsShown] = React.useState(false);

  // const theme = mergeTheme({
  //   components: {
  //     Button: {
  //       baseStyle: {
  //         color: "white",
  //         paddingX: 12,
  //         paddingY: 8,
  //         borderRadius: 5,
  //         backgroundColor: "indianred",
  //         selectors: {
  //           _hover: {
  //             backgroundColor: "firebrick",
  //           },
  //           _active: {
  //             backgroundColor: "darkred",
  //           },
  //           _focus: {
  //             boxShadow: "0 0 0 2px lightcoral",
  //           },
  //         },
  //       },
  //     },
  //   },
  // });

  return (
      <Pane>
        <Dialog
          isShown={isShown}
          title="Crie sua conta agora!"
          onCloseComplete={() => setIsShown(false)}
          confirmLabel="Criar Conta"
        >
          Crie sua conta e tenha acesso a ferramentes para criação de playslists
        </Dialog>

        <Login onClick={() => setIsShown(true)}>
          <FontAwesomeIcon icon={faUser} />
        </Login>
      </Pane>
  );
};

export default SignUp;
