import React from "react";
import './DeleteAllTodoButton.css'
import { GrTrash } from "react-icons/gr";

function DeleteAllTodoButton(props){

    const onClickButton=()=>{
        console.log('You clicked submit. - tamos borrando');
        props.deleteAllTodo(prevState=>!prevState);
    };


    return (
        <button
        className="DeleteAllTodoButton"
        onClick={onClickButton}       
      >
      < GrTrash />
      </button>
    );
}

export {DeleteAllTodoButton}; 