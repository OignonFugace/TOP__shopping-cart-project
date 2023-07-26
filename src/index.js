import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme";
import "@ui5/webcomponents-react/dist/Assets";
import { CartContextProvider } from "./contexts/CartContext";
import { BrowserRouter } from "react-router-dom";
import { ToastContextProvider } from "./contexts/ToastContext";

setTheme("sap_horizon");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ToastContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
