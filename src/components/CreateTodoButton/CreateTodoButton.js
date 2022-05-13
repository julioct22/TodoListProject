import React from "react";
import './CreateTodoButton.css'
import { IoAdd } from "react-icons/io5";

function CreateTodoButton(props){

    const onClickButton=()=>{
        props.setOpenModal(prevState=>!prevState);
    };
    return (
        <button
        className="CreateTodoButton"
        onClick={onClickButton}
      >
      
       <IoAdd/>
      </button>
    );
}

export {CreateTodoButton}; 