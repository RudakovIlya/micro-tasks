import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from "uuid";


export type FilterValuesType = "all" | "active" | "completed";

type TodoListsType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TasksObjType = {
    [key: string]: TaskType[]
}

function AppTodo() {

    const todoListID1 = v1();
    const todoListID2 = v1();

    const [todoLists, setTodoLists] = useState<TodoListsType[]>([
        {id: todoListID1, title: 'What to learn', filter: 'all'},
        {id: todoListID2, title: 'What to buy', filter: 'all'},
    ])

    const [tasks, setTasks] = useState<TasksObjType>({
        [todoListID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todoListID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    function removeTask(todoListID: string, taskID: string) {
        setTasks({...tasks, [todoListID]: tasks[todoListID].filter(task => task.id !== taskID)})
    }

    function addTask(todoListID: string, title: string) {
        setTasks({...tasks, [todoListID]: [...tasks[todoListID], {id: v1(), title, isDone: false}]})
    }

    function changeStatus(todoListID: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todoListID]: tasks[todoListID].map(task => task.id === taskId ? {...task, isDone} : task)})
    }

    function changeFilter(todoListID: string, filter: FilterValuesType) {
        setTodoLists(todoLists.map(todoList => todoList.id === todoListID ? {...todoList, filter} : todoList))
    }

    const pureFilteredTasks = (tasks: TaskType[], filter: FilterValuesType): TaskType[] => {
        switch (filter) {
            case "active":
                return tasks.filter(task => !task.isDone)
            case "completed":
                return tasks.filter(task => task.isDone)
            default:
                return tasks
        }
    }

    const removeTodoList = (todoListID: string) => {
        setTodoLists(todoLists.filter(todoList => todoList.id !== todoListID));
        delete tasks[todoListID]
    }

    return (
        <div className="App">
            {
                todoLists.map(todoList => {
                    const filteredTasks = pureFilteredTasks(tasks[todoList.id], todoList.filter)
                    return (
                        <Todolist
                            key={todoList.id}
                            todoListID={todoList.id}
                            title={todoList.title}
                            tasks={filteredTasks}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={todoList.filter}
                            removeTodoList={removeTodoList}
                        />
                    )
                })
            }
        </div>
    );
}

export default AppTodo;
