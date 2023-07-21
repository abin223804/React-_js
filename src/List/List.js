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

constructor(props){
  super(props);
  this.state = {
    data:arr,
    activeState:'all'
  }

}





  onListChange=(evt)=> {
    console.log(evt.target.value);
    const value=evt.target.value;
   

this.setState({
  activeState:value
})


  }
handleDelete=()=>{
  console.log('Delete');

}





  render() {

    const{
      data,
      activeState
    }=this.state


    const newList=data.filter((item)=>{
      if(activeState==='all'){
        return true;
      }if(activeState==='active'){
        return item.isActive===true;
      }if(activeState==='non-active'){
        return item.isActive===false;
      }
      return false;
      

    })

    
    return (
      <Tools onAction={this.onListChange}>
        <div className="app_list">
          {newList.map((obj) => {
            return (
              <ListItem
                key={obj.title}
                title={obj.title}
                descr={obj.descr}
                isActive={obj.isActive}
                onDelete={this.handleDelete}
              />
            );
          })}
        </div>
      </Tools>
    );
  }
}

export default List;
