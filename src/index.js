import React from "react";
import ReactDOM from "react-dom";
import Application from "robe-react-commons/lib/application/Application";
import Local from "robe-react-ui/lib/assets/en_US.json"; // eslint-disable-line import/no-unresolved
import Switch from "./Switch";

Application.setBaseUrlPath("http://localhost:8181/rest");
Application.loadI18n(Local);


const appNode = document.getElementById("app");
ReactDOM.render(<Switch/>, appNode);