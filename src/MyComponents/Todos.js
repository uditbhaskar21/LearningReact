import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: '70vh',
        margin: '35px auto'
    }
    return (
        <div className="container " style = {myStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length == 0? <p className="text-center">No Todos are in the list!</p>:
            props.todos.map((todo)=> {
                return (
                <TodoItem todo = {todo} key= {todo.sno} onDelete = {props.onDelete}/>)
            })
            };
           

        </div>
    )
}
