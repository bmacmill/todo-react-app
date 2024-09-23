import React from "react"
import TodoInput from "./Components/TodoInput"
import TodoList from "./Components/TodoList"
import "./Index.css"

export default function App() {


  const [todos, setTodos] = React.useState([])

  const [currentTodoValue, setCurrentTodoValue] = React.useState('')


  //a persist function, nver sen this before
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))

  }
  function handleNewTodo(newTodo) {
    if (newTodo.length > 0) {
      const updateTodos = [...todos, newTodo]
      persistData(updateTodos)
      setTodos(updateTodos)
    }

  }
  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setCurrentTodoValue(valueToBeEdited)

    handleDeleteTodo(index)
  }

  function handleDeleteTodo(index) {
    const filteredTodos = todos.filter((todo, i) => i !== index)
    persistData(filteredTodos)
    setTodos(filteredTodos)
  }

  //this is unnecessarliy busy1!!!!!
  React.useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem("todos")
    
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput
        currentTodoValue={currentTodoValue}
        setCurrentTodoValue={setCurrentTodoValue}
        handleNewTodo={handleNewTodo} />

      <TodoList
        currentTodoValue={currentTodoValue}
        setCurrentTodoValue={setCurrentTodoValue}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos} />

    </>
  )
}

//45 min nasa app
//https://www.youtube.com/watch?v=82PXenL4MGg