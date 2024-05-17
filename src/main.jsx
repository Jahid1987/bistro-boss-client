import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import { HelmetProvider } from "react-helmet-async";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ParallaxProvider>
        <RouterProvider router={router} />
      </ParallaxProvider>
    </HelmetProvider>
  </React.StrictMode>
);
