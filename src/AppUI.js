import React from "react"
import {TodoCounter} from './components/TodoCounter/TodoCounter'; 
import {TodoContext} from './components/TodoContext/TodoContext'; 
import {TodoItem} from './components/TodoItem/TodoItem'; 
import {TodoList} from './components/TodoList/TodoList'; 
import {TodoSearch} from './components/TodoSearch/TodoSearch'; 
import {CreateTodoButton} from './components/CreateTodoButton/CreateTodoButton';
import {Modal} from './components/Modal/Modal';
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodosError } from "./components/TodosError/TodosError";
import { TodosLoading } from "./components/TodosLoading/TodosLoading";
import { EmptyTodos } from "./components/EmptyTodos/EmptyTodos"

  function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      } = React.useContext (TodoContext)

    return (
    <React.Fragment>
    <TodoCounter/>
    <TodoSearch />
   
          <TodoList>
            {error && <TodosError error={error}/>}
            {loading &&  <TodosLoading/>}
            {(!loading && !searchedTodos.length) && <EmptyTodos/>}
            
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

              {!!openModal&& (
                    <Modal>
                    <TodoForm/>
                  </Modal>
              )}

    
    <CreateTodoButton
      setOpenModal={setOpenModal}
      // openModal={openModal}
    />
   
  </React.Fragment>
     ); 
  }

  export { AppUI };

