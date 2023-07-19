import React from 'react';
import Label from './Label';




function ListItem(props) {

  const{
    title,
    descr,
    isActive
  }=props
  

    return (
      <div className="list_item">
        <hr />
        <div className="list_title">
          <h4>{title}</h4>
        </div>
        <div className="list_descr">
          {descr}
        </div>
        
        <div className="list_label">

           <Label isActive={isActive}/>
          

      </div>
      </div>
    );
  }

  export default ListItem;