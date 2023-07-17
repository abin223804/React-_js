import React from 'react';
import Label from './Label';



function ListItem() {
    return (
      <div className="list_item">
        <hr />
        <div className="list_title">
          <h4>My Title Two</h4>
        </div>
        <div className="list_descr">This is a very big Description</div>
        
        <div className="list_label">

           <Label/>
           <Label/>
           <Label/>

      </div>
      </div>
    );
  }

  export default ListItem;