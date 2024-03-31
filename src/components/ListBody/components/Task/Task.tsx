'use client'

import { ITaskInfo } from '@/types/interfaces'
import Input from '@/ui/Input/Input'
import TaskControls from './components/TaskControls/TaskControls'

const Task = ({ content }: ITaskInfo) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const elem = e.target
    }

    return (
        <li>
            <Input
                onChange={handleChange}
                type='checkbox'
                isCheck={undefined}
                label={content}
            />
            <TaskControls />
        </li>
    )
}

export default Task
