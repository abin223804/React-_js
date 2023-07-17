import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";

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
        <div className="list_item">
          <hr />
          <div className="list_title">
            <h4>
             My Title One 
            </h4>

          </div>
          <div className="list_descr">
            This is a very big Description

          </div>
          <div className="list_label">
            <span>Label1</span>
            <span>Labe2</span>
            <span>Label3</span>

          </div>

          <hr />
          <div className="list_title">
            <h4>
             My Title One 
            </h4>

          </div>
          <div className="list_descr">
            This is a very big Description

          </div>
          <div className="list_label">
            <span>Label1</span>
            <span>Labe2</span>
            <span>Label3</span>

          </div>

          <hr />
          <div className="list_title">
            <h4>
             My Title One 
            </h4>

          </div>
          <div className="list_descr">
            This is a very big Description

          </div>
          <div className="list_label">
            <span>Label1</span>
            <span>Labe2</span>
            <span>Label3</span>

          </div>

          <hr />
        </div>
      </div>
    </div>
    <div className="app_footer"></div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// abin s chandran
