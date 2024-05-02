'use client'

import { useEffect } from 'react'
import { removeAllEmptyContentTask } from '@/redux/features/taskSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { RootState } from '@/redux/store'
import ListControls from './components/ListControls/ListControls'
import NoTasks from './components/NoTasks'
import Task from './components/Task/Task'
import { MainForm, TaskList } from './ListBody.styled'

const ListBody = () => {
    const todos = useAppSelector((state: RootState) => state.taskManager.todos)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(removeAllEmptyContentTask())
    }, [])

    const length = todos.length

    return (
        <MainForm onSubmit={(e: React.FormEvent) => e.preventDefault()}>
            <TaskList>
                {length ? (
                    todos.map(el => {
                        return (
                            <Task
                                key={el.id}
                                id={el.id}
                                content={el.content}
                                isCheck={el.isCheck}
                            />
                        )
                    })
                ) : (
                    <NoTasks />
                )}
            </TaskList>
            <ListControls />
        </MainForm>
    )
}

export default ListBody
