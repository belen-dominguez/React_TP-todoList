import React from 'react';
import DisplayList from "./DisplayList"
//import DisplayTags from "./DisplayTags";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from 'react';
import { BsTrash } from "react-icons/bs";



const TodoList = () => {
    const [list, setList] = useState([]) //este va a ser el array de las tareas
    const [listItem, setListItem] = useState({name: "", check: ""})

    let incompleteTasks = [];
    let completeTasks = [];


    const inputValue = (event) => {
       setListItem({ name : event.target.value, check : false });
    
    };

    const addItem = () => {
        setList([...list, listItem])   
        setListItem({name: "", check: ""})
        
    }

    const removeItem = (item,e) => {
        setList(list.filter(tarea => tarea !== item)) 
        
        /* problema: cuando borro un elemento que esta tachado, el siguietne me lo meustra tachado tmb*/
        //console.log(e.currentTarget.parentElement.childNodes[0].childNodes[0]) //esto es el input que le sigueal elemento borrado
          let nextInput = e.currentTarget.parentElement.childNodes[0].childNodes[0];
          nextInput.checked = false;

       // console.log(e.currentTarget.parentElement.childNodes[0].childNodes[1])//este es el label que le sigue al elemento borrado
         let nextLabel =e.currentTarget.parentElement.childNodes[0].childNodes[1];
         nextLabel.style.textDecoration = "none";

        // console.log(e.currentTarget.parentElement.childNodes[0].childNodes[0])
        // console.log(e.currentTarget.parentElement.childNodes[0].childNodes[1])
       
    }

   
    return (
        <div className="container">
            <h1>To Do</h1>
            <div className="input">
                <input type="text" value={listItem.name} /*onKeyUp={(e) => {e.keyCode == 13 && addItem}}*/ onChange={inputValue} placeholder="Ingrese una tarea"/> <AiOutlinePlusCircle className="btn btn--add"  onClick={addItem}/>
            </div>
    
            <DisplayList list={list} remove={removeItem}  />

        </div>
    )
   

};

export default TodoList;