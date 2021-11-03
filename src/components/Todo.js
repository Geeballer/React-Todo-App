import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import FlipMove from 'react-flip-move';

function Todo({todo, removeTodo, toggleComplete}){
    
    function handleRemoveClick(){
        removeTodo(todo.id);
    }

    function handleToggleClick(){
        toggleComplete(todo.id)
    }

    return(
        <FlipMove duration={500} easing="ease-in-out">
            <li className="item" 
                style={{textDecoration: todo.completed ? 'line-through' : null,
                color: todo.completed ? 'rgb(172, 172, 172)' : null}}>
                <FontAwesomeIcon icon={faCircle} className="circle-check" 
                    onClick={handleToggleClick} 
                    style={{color: todo.completed ? 'yellowgreen' : null, 
                        border: todo.completed ? 'none' : null}}/>
                <p className="text">{todo.task}</p>
                <FontAwesomeIcon icon={faTrash} className="delete" onClick={handleRemoveClick} />
            </li>
        </FlipMove>
    )
}

export default Todo;