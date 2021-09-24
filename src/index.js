import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import StateProvider from "./providers/StateProvider";
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter } from "react-router-dom";

  ReactDOM.render(
    <BrowserRouter>
      <StateProvider>
        <ParallaxProvider>
        <App />
        </ParallaxProvider>
      </StateProvider>
    </BrowserRouter>,
    document.getElementById("root")
  );
