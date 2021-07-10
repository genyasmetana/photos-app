import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./main/routes";
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
