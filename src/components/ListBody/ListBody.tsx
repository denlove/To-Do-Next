'use client'

import { taskSelector } from '@/redux/features/taskSlice'
import { useAppSelector } from '@/redux/hooks'
import { TaskState } from '@/types/interfaces'
import ListControls from './components/ListControls/ListControls'
import NoTasks from './components/NoTasks'
import Task from './components/Task/Task'
import { MainForm, TaskList } from './ListBody.styled'

const ListBody = () => {
    const todos = useAppSelector(taskSelector)

    return (
        <MainForm onSubmit={(e: React.FormEvent) => e.preventDefault()}>
            <TaskList>
                {todos[0] ? (
                    todos.map((el: TaskState) => (
                        <Task
                            key={el.id}
                            id={el.id}
                            content={el.content}
                            isCheck={el.isCheck}
                        />
                    ))
                ) : (
                    <NoTasks />
                )}
            </TaskList>
            <ListControls />
        </MainForm>
    )
}

export default ListBody
