import React from 'react';
import Label from './Label';



function ListItem(props) {
  console.log(props);
    return (
      <div className="list_item">
        <hr />
        <div className="list_title">
          <h4>{props.title}</h4>
        </div>
        <div className="list_descr">
          {props.descr}
        </div>
        
        <div className="list_label">

           <Label isActive={props.isActive}/>
          

      </div>
      </div>
    );
  }

  export default ListItem;