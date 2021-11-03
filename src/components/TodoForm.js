import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import uuid from 'react-uuid';

function TodoForm({addTodo}){
    const [todo, setTodo] = useState({
        id: '',
        task: '',
        completed: false
    });

    function handleTaskInputChange(e){
        setTodo({...todo, task: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo, id:uuid()});
            //Reset task input
            setTodo({...todo, task: ''});
        }
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <button className="add-todo">
                <FontAwesomeIcon icon={faPlus} className="add-icon"></FontAwesomeIcon>
            </button>
            <input 
                name= "task" 
                type="text" 
                placeholder="Add a todo" 
                className="input"
                value={todo.task}
                onChange={handleTaskInputChange} />
        </form>
    )
}

export default TodoForm;