import React from "react";
import Tools from "../components/Tools";
import ListItem from "./ListItem";

let arr = [
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
  onListChange(evt) {
    console.log(evt.target.value);
    const value=evt.target.value;
    const newList=arr.filter((item)=>{
      if(value==='all'){
        return true;
      }if(value==='active'){
        return item.isActive===true;
      }if(value==='non-active'){
        return item.isActive===false;
      }
      return false;
      

    })
    console.log(newList)
     arr=newList;
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
