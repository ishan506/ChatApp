import React from "react";
import ReactDOM from "react-dom/client";
 import Live from "./Live";
 import "./index.css"
import M from "./App";
import "@fontsource/nunito";
 
import {Route , Routes , BrowserRouter} from "react-router-dom"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={< M/>} />
        <Route path="/about" element={<Live/>} />
    
    </Routes>
    </BrowserRouter>
   </React.StrictMode>
);