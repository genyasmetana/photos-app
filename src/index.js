import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./main/store/store";
import App from "./App";

import "./resources/styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
