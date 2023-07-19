import React from "react";
import './Label.css';

// function Label() {
//   return <span>Label1 </span>;
// }

// class component


class Label extends React.Component{
    render(){

        const props=this.props;
        const style=props.isActive ? {background:"green"}:{background:"orange"} 


        return <span className="list-label-items" style={style}>Label Abin </span>;
    }
}



export default Label;
