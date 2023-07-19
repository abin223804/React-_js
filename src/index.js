import React from "react";
import ReactDOM from "react-dom/client";
import ListItem from './List/ListItem';
import Header from "./components/Header";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="app">
    <Header/>
    <div className="app_body">
      <div className="app_list">
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>

      
      
        </div>
    </div>
    <div className="app_footer"></div>
  </div>
);
