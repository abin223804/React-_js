import React from 'react';



function ListItem() {
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

  export default ListItem;