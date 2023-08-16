import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/scss/bootstrap.scss';
import './styles/main.scss';
import App from './App';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <App />
)