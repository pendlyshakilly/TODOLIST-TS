import React from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number;
    title: string;
    isDone: true;
}



function App() {
   //BLL:

   const todoListTitle: string = "What to learn"
   const tasksForTodoList: Array<any> = [
       {id: 1, title: "HTML & CSS", isDone: true},
       {id: 2, title: "JS & ES6", isDone: true},
       {id: 3, title: "REACT & TS", isDone: true}
   ]


    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={tasksForTodoList}
            />
        </div>
    );
}

export default App;
