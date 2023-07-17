import React from "react";
import ReactDOM from "react-dom/client";

function listitem() {
  return (
    <div className="list_item">
      <hr />
      <div className="list_title">
        <h4>My Title One</h4>
      </div>
      <div className="list_descr">This is a very big Description</div>
      <div className="list_label">
        <span>Label1</span>
        <span>Labe2</span>
        <span>Label3</span>
      </div>
    </div>
  );
}

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
       
        {listitem()}
        {listitem()}
        {listitem()}
        </div>
    </div>
    <div className="app_footer"></div>
  </div>
);
