/* eslint-disable react/prop-types */
import  { useState } from 'react'
import { useTodo } from '../contexts/ToDoContext'

function TodoItem({todo}) {

    const [isTodoEditable, setTodoEditable] = useState(false)

    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo : todoMsg})
        setTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    
    return (
        <div className={`flex-border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300
        text-black }`}
        >
            <input type="checkbox"  
            className='cursor-pointer'
            checked={todo.completed}
            onChange={toggleCompleted}
            />            

            <input type="text" 
            className={`border outline-none w-full bg-transparent rounded-lg text-cyan-300
            ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} {${todo.completed ? " line-through" : ""}`}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
            />

            <button className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
            onClick={() => {
                if(todo.completed) return
                if(isTodoEditable){
                    editTodo()
                }else setTodoEditable((prev) => !prev)
            }}
            disabled={todo.completed}
            >{isTodoEditable ? "📁" : "✏️"}</button>

            <button 
            className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
            onClick={() => deleteTodo(todo.id)}
            >❌</button>
        </div>
    )
}

export default TodoItem