import React from "react";
import './DeleteAllTodoButton.css'
import { GrTrash } from "react-icons/gr";

function DeleteAllTodoButton(props){

    const onClickButton=()=>{
        props.setOpenModal(prevState=>!prevState);
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