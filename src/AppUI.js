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
import {DeleteAllTodoButton} from "./components/DeleteAllTodoButton/DeleteAllTodoButton"
import {Footer} from './components/Footer/Footer'; 
import {NavBar} from './components/NavBar/NavBar'; 

import 'bootstrap/dist/css/bootstrap.min.css';


  function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        deleteAllTodo,
        

      } = React.useContext (TodoContext)

    return (
    <React.Fragment>
    < NavBar/>
    <div className="contenedor">
    
    <TodoCounter/>
    {/* <p className="instrucciones"> Para agregar una tarea a la lista utiliza el boton azul con el símbolo de + </p> */}
    <TodoSearch />
    
          <TodoList>
            {error && <TodosError error={error}/>}
            {loading &&  <TodosLoading/>}
            <br/>
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


    <DeleteAllTodoButton
      deleteAllTodo={deleteAllTodo}
      
    />

    <CreateTodoButton
      setOpenModal={setOpenModal}
      // openModal={openModal}
    />
    <Footer/>
    </div>
    
 


  </React.Fragment>
     ); 
  }

  export { AppUI };

