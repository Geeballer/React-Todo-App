import React from "react";
import Todo from './Todo';

function TodoList({todos, removeTodo, toggleComplete}){

    return(
        <ul className="content">
          {todos.map( todo => (
            <Todo 
              key={todo.id} 
              todo={todo} 
              removeTodo={removeTodo}
              toggleComplete={toggleComplete}
            />
          ))}
      </ul>
    )
}

/* 
<li className="item">
  <p className="text">{}todo.task</p>
  <FontAwesomeIcon icon={faTrash} className="delete"></FontAwesomeIcon>
</li> 
*/
export default TodoList;