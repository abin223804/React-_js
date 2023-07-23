import React from 'react';
import ListItem from './ListItem';

function SimpleList(props){


    const{
        data,
        onAction
    }=props

    return(
        <div className="app_list">
          {data.map((obj) => {
            return (
              <ListItem
                key={obj.title}
                title={obj.title}
                descr={obj.descr}
                isActive={obj.isActive}
                onDelete={()=>{
                  onAction(obj);
                }}
              />
            );
          })}
        </div>
    )
}

export default SimpleList;