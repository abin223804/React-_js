import React from "react";
import ReactDOM from "react-dom/client";
import ListItem from './List/ListItem'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="app">
    <div className="app_header">
      <span>Home </span>
      <span>Usage </span>
      <span>Setting </span>
      <span>Logout </span>
    </div>
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
