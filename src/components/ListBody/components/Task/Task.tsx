'use client'

import { ITaskInfo } from '@/types/interfaces'
import Input from '@/ui/Input/Input'
import TaskControls from './components/TaskControls/TaskControls'
import { StyledTask } from './Task.styled'
import { countSelector, increaseBy } from '@/redux/features/counterSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

const Task = ({ content }: ITaskInfo) => {
    const count = useAppSelector(countSelector)
    const dispatch = useAppDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const elem = e.target
        dispatch(increaseBy(5))
    }

    return (
        <StyledTask>
            <Input
                onChange={handleChange}
                type='checkbox'
                isCheck={undefined}
                label={content}
            />
            <TaskControls />
        </StyledTask>
    )
}

export default Task
