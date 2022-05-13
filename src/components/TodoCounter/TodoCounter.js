import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import './TodoCounter.css'
import { FcTodoList } from "react-icons/fc";




function TodoCounter(){
   const {totalTodos, completedTodos} = React.useContext(TodoContext); 
    return (
        <h2 className="TodoCounter" >Has completado {completedTodos} de {totalTodos} TODOs < FcTodoList /> </h2>       
      
    );
}

export {TodoCounter}; 