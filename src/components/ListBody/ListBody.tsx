'use client'

import { useAppSelector } from '@/redux/hooks'
import ListControls from './components/ListControls/ListControls'
import Task from './components/Task/Task'
import { MainForm, TaskList } from './ListBody.styled'
import { taskSelector } from '@/redux/features/taskSlice'

const ListBody = () => {
    const todos = useAppSelector(taskSelector)

    return (
        <MainForm onSubmit={(e: React.FormEvent) => e.preventDefault()}>
            <TaskList>
                {todos.map(el => (
                    <Task
                        key={el.id}
                        id={el.id}
                        content={el.content}
                        isCheck={el.isCheck}
                    />
                ))}
            </TaskList>
            <ListControls />
        </MainForm>
    )
}

export default ListBody
