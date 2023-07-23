import React from "react";
import Tools from "../components/Tools";
import ListItem from "./ListItem";
import SimpleList from "./SimpleList";
let arr = [
  {
    id: 1,
    title: "appointment for july",
    descr: "The  patiant is resheduled to augest",
    isActive: true,
  },
  {
    id: 2,
    title: "appointment for augest",
    descr: "The  patiant is resheduled to september",
    isActive: false,
  },
  {
    id: 3,
    title: "appointment for september",
    descr: "The  patiant is resheduled to october",
    isActive: true,
  },
];

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: arr,
      activeState: "all",
    };
  }

  onListChange = (evt) => {
    console.log(evt.target.value);
    const value = evt.target.value;

    this.setState({
      activeState: value,
    });
  };
  handleDelete = (item) => {
    console.log("Delete",item);
    const newList=this.state.data.filter((element)=>element.id!==item.id);

    this.setState({
      data:newList,
    })
  };

  render() {
    const { data, activeState } = this.state;

    const newList = data.filter((item) => {
      if (activeState === "all") {
        return true;
      }
      if (activeState === "active") {
        return item.isActive === true;
      }
      if (activeState === "non-active") {
        return item.isActive === false;
      }
      return false;
    });

    return (
      <Tools onAction={this.onListChange}>

        <SimpleList data={newList} onAction={this,this.handleDelete}/>
        
      </Tools>
    );
  }
}

export default List;
