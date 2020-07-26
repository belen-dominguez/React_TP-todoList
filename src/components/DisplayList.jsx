import React from 'react';
import { BsTrash } from "react-icons/bs";
import { useState } from 'react';
import { BsListCheck } from "react-icons/bs";


const DisplayList = ({list, remove}) => {
    const [displayList, setDisplayList] = useState([])
    const showAll = document.getElementById("showAll")
    const showSome = document.getElementById("showSome")
   
    const changeCheck = (item, event) => {
       
        let label = event.target.nextSibling

        // console.log(event.target.nextSibling)
        // console.log(label.attributes.name.value)
       
        if(event.target.checked){
             item.check = true;
            label.style.textDecoration = "line-through"
             
         }
         else {
            item.check = false;
            label.style.textDecoration = "none"
         }
         
    }
    
    const displayAll = () => {
        showAll.style.display = "block";
        showSome.style.display = "none";

        setDisplayList([...list]) 
      
        
     }
     const displayIncomplete = () => {
        showAll.style.display = "none";
        showSome.style.display = "block";
        setDisplayList(list.filter(tarea => tarea.check == false)) 
       
     }
     const displayComplete = () => {
        showAll.style.display = "none";
        showSome.style.display = "block";
         setDisplayList(list.filter(tarea => tarea.check == true)) 
       
        
     }
    
    console.log(list)
   return (
        <div className="displayList">
            <div id="showAll">
            
                {list.map((item, i )=> {
                   
                    return ( 
                        <div className="displayItem">
                            <div>
                                <input type="checkbox" name={item.name}  onClick={(e) => {changeCheck(item,e)}}/> 
                                <label  key={i} name={item.name}> {item.name} </label>
                            </div>
                            <BsTrash className="btn btn--trash erase" onClick={(e) => {remove(item,e)}}/>
                        </div>
                    )
                })}
            
            </div>
            <div id="showSome">
                <ul>

                {displayList.map((item, i )=> {
                    // console.log(item)
                    return ( 
                        <div className="displayItem">
                            <div>
                                <input type="checkbox" name={i}  onClick={(e) => {changeCheck(item,e)}}/> 
                                <label  key={i}> {item.name} </label>
                            </div>
                            <BsTrash className="btn btn--trash erase" onClick={() => {remove(item)}}/>
                        </div>
                    )
                })} 
                </ul>
            </div>
            
            <div className="displayTags">
                <span>{list.length} <BsListCheck /></span>
                <span className="tag tag--all" onClick={displayAll}>Todas</span>
                <span className="tag tag--incomplete" onClick={displayIncomplete}>Incompletas</span>
                <span className="tag tag--complete" onClick={displayComplete}>Completas</span>
            </div>
        </div>
   ) 

    

}

export default DisplayList;