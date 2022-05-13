import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import './TodoCounter.css'
import { FcApproval } from "react-icons/fc";




function TodoCounter(){
   const {totalTodos, completedTodos} = React.useContext(TodoContext); 
    return (
        <h2 className="TodoCounter" >Has completado {completedTodos} de {totalTodos} Tareas < FcApproval /> </h2>       
      
    );
}

export {TodoCounter}; 