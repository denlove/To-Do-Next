'use client'

import React from 'react'
import { ITaskInfo } from '@/types/interfaces'
import Input from '@/ui/Input/Input'
import TaskControls from './components/TaskControls/TaskControls'
import { StyledLable, StyledTask } from './Task.styled'
import {
    disableEditing,
    focusTextInput,
    resizeByContent,
} from './helpers/handleTaskInputs'
import { InputFocus } from '@/types/types'
import { useHandleInputs } from './hooks/useHandleInputs'

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
                    onMouseDown={disableEditing}
                    onKeyDown={resizeByContent}
                    onDoubleClick={focusTextInput}
                    onBlur={(e: InputFocus) => editTaskText(e, id, content)}
                    value={inputValue}
                />
            </StyledLable>
            <TaskControls id={id} toggleCheck={handleCheckBoxChange} />
        </StyledTask>
    )
}

export default Task
