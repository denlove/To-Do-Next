'use client'

import React from 'react'
import { useHandleInputs } from './hooks/useHandleInputs'
import { ITaskInfo } from '@/types/interfaces'
import Input from '@/ui/Input/Input'
import GrowTextArea from './components/GrowTextArea/GrowTextArea'
import TaskControls from './components/TaskControls/TaskControls'
import { StyledLable, StyledTask } from './Task.styled'

const Task = ({ id, content, isCheck }: ITaskInfo) => {
    const {
        isChecked,
        handleCheckBoxChange,
        areaValue,
        handleTextInputChange,
        editTaskText,
    } = useHandleInputs(id, isCheck, content)

    return (
        <StyledTask $isCheck={isChecked}>
            <StyledLable>
                <Input
                    id={`check-${id}`}
                    type='checkbox'
                    onChange={handleCheckBoxChange}
                    checked={isChecked}
                />
                <GrowTextArea
                    id={id}
                    content={content}
                    areaValue={areaValue}
                    changeAreaValue={handleTextInputChange}
                    editTaskText={editTaskText}
                />
            </StyledLable>
            <TaskControls id={id} toggleCheck={handleCheckBoxChange} />
        </StyledTask>
    )
}

export default Task
