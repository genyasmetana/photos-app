import React from "react";
import Routes from "./main/routes";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./libs/common/components/header";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
