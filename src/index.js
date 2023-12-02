import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";import { persistor, store } from "./redux/store";

// Import the entry point and render it's default export
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    {/* </React.StrictMode> */}
  </Provider>
);
