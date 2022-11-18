import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./contexts/AuthContext";
import NameProvider from "./contexts/NameContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <NameProvider>
        <App />
      </NameProvider>
    </AuthProvider>
  </React.StrictMode>
);
