import { FilterValues, Task } from './App'
import './App.css'
import { Button } from './Button'

export type Props = {
    title: string
    tasks: Task[]
    deleteTask: (taskId: string) => void
    changeFilter: (filter: FilterValues) => void
    creatTask: () => void
}

export const TodolistItem = ({ title, tasks, deleteTask, changeFilter, creatTask }: Props) => {
    return (
        <div className="app">
            <div>
                <h3>{title}</h3>
                <div>
                    <input />
                    <Button title={'+'} onClick={creatTask} />
                </div>
                <ul>
                    {tasks.length === 0 ? <p>Тасок нет</p> :
                        tasks.map(task => {
                            return (
                                <li key={task.id}>
                                    <input type="checkbox" checked={task.isDone} />
                                    <span>{task.title}</span>
                                    <Button title={'x'} onClick={() => deleteTask(task.id)} />
                                </li>
                            )
                        })}
                </ul>
                <div>
                    <Button title={'All'} onClick={() => changeFilter('all')} />
                    <Button title={'Active'} onClick={() => changeFilter('active')} />
                    <Button title={'Completed'} onClick={() => changeFilter('completed')} />
                </div>
            </div>
        </div>
    )
}


