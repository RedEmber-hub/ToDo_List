import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import "./ToDoList.scss"
import { ToDo } from "../../modules/todo-item"

export const ToDoList = () => {
    const todos: ToDo[] = [
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
    ]

    const checkedList = () => {
        return todos
            .filter((item) => !item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem toDoItem={item} key={idx} />
                )
            })

    }

    const uncheckedList = () => {
        return todos
            .filter((item) => item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem toDoItem={item} key={idx} />
                )
            })

    }

    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                {checkedList()}
            </ul>
            <ul className="todo-list completed">
                {uncheckedList()}
            </ul>
        </div>
    )
}