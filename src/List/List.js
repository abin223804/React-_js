
import React from 'react';
import ListItem from './ListItem'


const arr=[{
    title:'appointment for july',
    descr:'The  patiant is resheduled to augest',
    isActive:true,
},
{
    title:'appointment for augest',
    descr:'The  patiant is resheduled to september',
    isActive:false,
},{
    title:'appointment for september',
    descr:'The  patiant is resheduled to october',
    isActive:true,
}
]




class List extends React.Component {
    render(){
        return(
            <div className="app_list">
          {
            arr.map((obj)=>{
                return   <ListItem title={obj.title} descr={obj.descr} isActive={obj.isActive} />
            })
          }
         
      
            
            
              </div>
        )
    }
}


export default List;