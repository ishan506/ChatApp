import React from "react";
import ReactDOM from "react-dom/client";
 import Name from "./name";
 import "./index.css"
import M from "./App";
import Live from "./live";
import VideoCall from "../fonthand/Video";
import "@fontsource/nunito";
 
import {Route , Routes , BrowserRouter} from "react-router-dom"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/*" element={< M/>} />
        <Route path="/about" element={<Name/>} />
    <Route path="/chat" element={<Live/>}/>
     <Route path="/video" element={<VideoCall />} />
    </Routes>
    </BrowserRouter>
   </React.StrictMode>
);