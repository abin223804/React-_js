import React from "react";
import Label from "./Label";
import "./ListItem.css";

function ListItem(props) {
  const { title, descr, isActive, onDelete } = props;

  return (
    <div className="list_item">
      <hr />
      <div className="list_title">
        <h4>{title}</h4>
        <label onClick={onDelete}>Delete</label>
      </div>
      <div className="list_descr">{descr}</div>

      <div className="list_label">
        <Label
          onAction={() => {
            console.log("parent clicked  ");
          }}
          isActive={isActive}
        />
      </div>
    </div>
  );
}

export default ListItem;
