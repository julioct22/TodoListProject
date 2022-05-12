import React from "react";
import './TodoItem.css'
import { IoCheckmarkSharp } from 'react-icons/io5';
import { IoTrashSharp } from "react-icons/io5";

function TodoItem(props){




    return (
        <li className="TodoItem">
        <span 
       
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
        >< IoCheckmarkSharp />
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span 
          className="Icon Icon-delete"
          onClick={props.onDelete}
          >
          < IoTrashSharp />
        </span>
      </li>
    );
}

export {TodoItem}; 