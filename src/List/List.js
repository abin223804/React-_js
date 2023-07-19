
import React from 'react';
import ListItem from './ListItem'


const obj={
    title:'appointment for july',
    descr:'The  patiant is resheduled to augest',
    isActive:false,
}




class List extends React.Component {
    render(){
        return(
            <div className="app_list">
            <ListItem title={obj.title} descr={obj.descr} isActive={obj.isActive} />
         
      
            
            
              </div>
        )
    }
}


export default List;