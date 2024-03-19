import {createContext, useContext} from 'react'


// creating and defining a context here itself (hook)
export const ToDoContext = createContext({
    todos : [
        {
            id : 1 ,
            todo : "ToDo Message",
            completed : false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
})

    // a hook which returns the above hook :)
export const useTodo = ()  => {
    return useContext(ToDoContext)
}



export const ToDoProvider = ToDoContext.Provider
