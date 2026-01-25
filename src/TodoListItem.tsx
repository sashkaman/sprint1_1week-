import { ChangeEvent, useState, KeyboardEvent } from 'react'
import { FilterValues, Task } from './App'
import './App.css'
import { Button } from './Button'

export type Props = {
    title: string
    tasks: Task[]
    deleteTask: (taskId: string) => void
    changeFilter: (filter: FilterValues) => void
    createTask: (title: string) => void
}

export const TodolistItem = ({ title, tasks, deleteTask, changeFilter, createTask }: Props) => {

    // const inputRef = useRef<HTMLInputElement>(null)

    const [taskTitle, setTaskTitle] = useState('')

    const createTaskHandler = () => {
        createTask(taskTitle)
        setTaskTitle('')
    }

    const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
    }

    const createTaskOnEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            createTaskHandler()
        }
    }

    const mappedTaskHandler = tasks.length === 0 ? <p>Тасок нет</p> :
        tasks.map(task => {
            const deleteTaskHandler = () => {
                deleteTask(task.id)
            }

            return (
                <li key={task.id}>
                    <input type="checkbox" checked={task.isDone} />
                    <span>{task.title}</span>
                    <Button title={'x'} onClick={deleteTaskHandler} />
                </li>
            )
        })

    return (
        <div className="app">
            <div>
                <h3>{title}</h3>
                <div>
                    <input value={taskTitle}
                        onChange={changeTaskTitleHandler}
                        onKeyDown={createTaskOnEnterHandler}
                    />

                    <Button title={'add'}
                        onClick={() => { createTaskHandler() }}
                        disabled={!taskTitle || taskTitle.length > 10}
                    />

                    {/* <Button title={'+'}
                        onClick={() => {
                            if (inputRef.current) {
                                createTask(inputRef.current.value)
                                inputRef.current.value = ''
                            }
                        }} /> */}

                </div>

                {!taskTitle && <div>Max title lenght is 10 charters</div>}
                {taskTitle.length > 10 && <div style={{ color: 'red' }}>Max title lenght is 10 charters</div>}
                {taskTitle && taskTitle.length <= 9 && <div>Your title lenght is {taskTitle.length} charters</div>}

                <ul>
                    {mappedTaskHandler}
                </ul>
                <div>
                    <Button title={'All'} onClick={() => changeFilter('all')} />
                    <Button title={'Active'} onClick={() => changeFilter('active')} />
                    <Button title={'Completed'} onClick={() => changeFilter('completed')} />
                </div>
            </div>
        </div >
    )
}


