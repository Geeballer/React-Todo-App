import React, { useEffect, useState } from 'react';
import './App.css';
import './media.css';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const LOCAL_STORAGE_KEY = 'react-todo-list-todos';

function App(){
  const [todos, setTodos] = useState([]);
  //Store Todo to Local Storage
  useEffect(() => {
    const storeTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storeTodos){
      setTodos(storeTodos)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  //Add Todo
  function addTodo(todo){
    setTodos([todo, ...todos]);
  }
  //Remove Todo
  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id));
  }

  //Check if todo is complete
  function toggleComplete(id){
    setTodos(
      todos.map(todo => {
        if (todo.id === id){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    );
  }

  return (
    <div className="App">
      <div className="todo_container">
        <TodoHeader />
        <TodoList 
          todos={todos}
          removeTodo = {removeTodo}
          toggleComplete = {toggleComplete}
        />
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
  
  
}

export default App;