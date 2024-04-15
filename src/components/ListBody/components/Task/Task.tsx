'use client'

import { ITaskInfo } from '@/types/interfaces'
import Input from '@/ui/Input/Input'
import TaskControls from './components/TaskControls/TaskControls'
import { StyledTask } from './Task.styled'
import { countSelector, increaseBy } from '@/redux/features/counterSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useState } from 'react'

const Task = ({ content, isCheck }: ITaskInfo) => {
    const [isChecked, setIsChecked] = useState<boolean>(isCheck)
    const count = useAppSelector(countSelector)
    const dispatch = useAppDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(increaseBy(5))
        setIsChecked(!isChecked)
    }

    return (
        <StyledTask $isCheck={isChecked}>
            <Input
                onChange={handleChange}
                type='checkbox'
                checked={isChecked}
                label={content}
            />
            <TaskControls />
        </StyledTask>
    )
}

export default Task
