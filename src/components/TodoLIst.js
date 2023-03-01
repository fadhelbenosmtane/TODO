import React from "react";
import Todo from "./Todo";


const TodoList= ({todos ,setTodos, filterTodos})=>{
    // console.log(todos)
    return(
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodos.map((todo)=>(
            <Todo  
                text={todo.text}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
                todo={todo}
                
            />
            ))}
      </ul>
    </div>
    )
}


export default TodoList
        




 

// {todos.map((todo) =>{

//             {/* console.log({todo}) */}
//             <ToDo 
//             setTodos={setTodos}
//             todos={todos}
//             key={todo.id}
//             text={todo.text}/>
//          })}  */