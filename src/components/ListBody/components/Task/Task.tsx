'use client'

import React from 'react'
import { useHandleInputs } from './hooks/useHandleInputs'
import { ITaskInfo } from '@/types/interfaces'
import { InputFocus } from '@/types/types'
import Input from '@/ui/Input/Input'
import TaskControls from './components/TaskControls/TaskControls'
import { StyledLable, StyledTask } from './Task.styled'

const Task = ({ id, content, isCheck }: ITaskInfo) => {
    const {
        isChecked,
        handleCheckBoxChange,
        inputValue,
        handleTextInputChange,
        editTaskText,
    } = useHandleInputs(id, isCheck, content)

    return (
        <StyledTask draggable $isCheck={isChecked}>
            <StyledLable>
                <Input
                    type='checkbox'
                    onChange={handleCheckBoxChange}
                    checked={isChecked}
                />
                <Input
                    type='text'
                    onChange={handleTextInputChange}
                    onBlur={(e: InputFocus) => editTaskText(e, id, content)}
                    placeholder='Click twice to edit'
                    value={inputValue}
                    autoFocus={!inputValue}
                />
            </StyledLable>
            <TaskControls id={id} toggleCheck={handleCheckBoxChange} />
        </StyledTask>
    )
}

export default Task
