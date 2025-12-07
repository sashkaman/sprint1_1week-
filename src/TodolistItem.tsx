type Props = {
    title: string
    tasks: Task[]
}

export type Task = {
    id: number
    title: string
    isDone: boolean
}

export const TodolistItem = (props: Props) => {
    const taskList = props.tasks.length === 0
        ? <span>Create your first task</span>
        : props.tasks.map(task => {
            return (
                <li>
                    <input type="checkbox" checked={task.isDone} />
                    <span>{task.title}</span>
                </li>
            )
        })

    // const listItems = props.tasks.map(task => {
    //     return (
    //         <li>
    //             <input type="checkbox" checked={task.isDone} />
    //             <span>{task.title}</span>
    //         </li>
    //     )
    // })

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            {taskList}
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}