import React from "react";
import Tools from "../components/Tools";
import ListItem from "./ListItem";

const arr = [
  {
    title: "appointment for july",
    descr: "The  patiant is resheduled to augest",
    isActive: true,
  },
  {
    title: "appointment for augest",
    descr: "The  patiant is resheduled to september",
    isActive: false,
  },
  {
    title: "appointment for september",
    descr: "The  patiant is resheduled to october",
    isActive: true,
  },
];

class List extends React.Component {
  onListChange() {
    console.log("Here");
  }
  render() {
    return (
      <Tools onAction={this.onListChange}>
        <div className="app_list">
          {arr.map((obj) => {
            return (
              <ListItem
                key={obj.title}
                title={obj.title}
                descr={obj.descr}
                isActive={obj.isActive}
              />
            );
          })}
        </div>
      </Tools>
    );
  }
}

export default List;
