import { useState } from "react"
import { Form } from "../components/Form/Form"
import { Header } from "../components/Header/Header"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../modules/todo-item"

export const ToDOListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([
        {
            id: 0,
            text: 'Первая задача',
            isDone: false
        },
        {
            id: 1,
            text: 'Вторая задача',
            isDone: true
        },
        {
            id: 2,
            text: 'Третья задача',
            isDone: true
        }
    ])

    const createNewToDo = (text: string) => {
        const newToDo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false
        }
        setTodos([...todos, newToDo])
    }

    const updateToDo = (toDoItem: ToDo) => { }

    const deleteToDo = (toDoItem: ToDo) => { }

    return (
        <>
            <Header />

            <Form createNewToDo={createNewToDo} />

            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
        </>
    )
}