import React from "react"
import TodoCard from "./TodoCard"


export default function TodoList({ todos, handleDeleteTodo, handleEditTodo }) {

    return (
        <ul className="main">{todos.map((todo, idx) => {
            return (
                <TodoCard key={idx} index={idx} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo}>
                    <p>{todo}</p>
                </TodoCard>)
        })}</ul>
    )
}