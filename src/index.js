import React from "react";
import { createRoot } from "react-dom/client";

import Nav from "./comp/nav";
import Body from "./comp/body";
import Footer from "./comp/footer";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <div>
    <Nav />
    <Body />
    <Footer />
  </div>
);
