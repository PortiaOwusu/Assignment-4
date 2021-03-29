import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./bootstrap.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header";
import HomePage from "./Pages/HomePage";
import ServicePage from "./Pages/ServicePage";
import AboutPage from "./Pages/AboutPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/service" exact component={ServicePage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
