import React from "react"


export default function TodoInput({ handleNewTodo, currentTodoValue, setCurrentTodoValue }) {




    function handleChange(e) {

        setCurrentTodoValue(e.target.value)

    }
    return (
        <header>
            <input type="text" onChange={handleChange} value={currentTodoValue} placeholder="input todo..." />
            <button onClick={() => {
                handleNewTodo(currentTodoValue)
                setCurrentTodoValue("")
            }}>add</button>
        </header >
    )
}