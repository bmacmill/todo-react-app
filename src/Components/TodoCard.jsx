import React from "react"
import { MdEditSquare, MdDelete } from "react-icons/md";

export default function TodoCard({ children, handleDeleteTodo, index, handleEditTodo }) {

    return (

        <li className="todoItem">{children}
            <div className="actionsContainer">

                <button onClick={() => handleEditTodo(index)}><MdEditSquare /></button>

                <button onClick={() => handleDeleteTodo(index)}><MdDelete /></button>
            </div>
        </li>



    )
}