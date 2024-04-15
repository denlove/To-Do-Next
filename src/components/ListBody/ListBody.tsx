'use client'

import { taskDict } from '@/dictionaries/taskDict'
import ListControls from './components/ListControls/ListControls'
import Task from './components/Task/Task'
import { MainForm, TaskList } from './ListBody.styled'

const ListBody = () => {
    return (
        <MainForm onSubmit={(e: React.FormEvent) => e.preventDefault()}>
            <TaskList>
                {taskDict.map(el => (
                    <Task
                        key={el.id}
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
