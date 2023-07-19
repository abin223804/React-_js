import React from "react";
import ReactDOM from "react-dom/client";
import ListItem from './List/ListItem';
import Header from "./components/Header";
import Footer from "./components/Footer";



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
    <Footer/>
    
  </div>
);
