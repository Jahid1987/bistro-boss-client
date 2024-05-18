import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import { HelmetProvider } from "react-helmet-async";
import { ParallaxProvider } from "react-scroll-parallax";
import AuthProvider from "./providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ParallaxProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ParallaxProvider>
    </HelmetProvider>
  </React.StrictMode>
);
