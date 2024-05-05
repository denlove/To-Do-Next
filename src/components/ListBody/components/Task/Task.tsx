'use client'

import React, { memo, useEffect } from 'react'
import { useAnimate, usePresence } from 'framer-motion'
import { useHandleInputs } from './hooks/useHandleInputs'
import { ITaskInfo } from '@/types/interfaces'
import Input from '@/ui/Input/Input'
import GrowTextArea from './components/GrowTextArea/GrowTextArea'
import TaskControls from './components/TaskControls/TaskControls'
import { StyledLable, StyledTask } from './Task.styled'

const Task = memo(function Task({ id, content, isCheck }: ITaskInfo) {
    const {
        isChecked,
        handleCheckBoxChange,
        areaValue,
        handleTextInputChange,
        editTaskText,
    } = useHandleInputs(id, isCheck, content)

    const [isPresent, safeToRemove] = usePresence()
    const [scope, animate] = useAnimate()

    useEffect(() => {
        if (isPresent) {
            const enterAnimation = async () => {
                await animate(scope.current, { opacity: 1, x: 0 })
            }
            enterAnimation()
        } else {
            const exitAnimation = async () => {
                await animate(scope.current, { opacity: 0, x: -50 })
                safeToRemove()
            }

            exitAnimation()
        }
    }, [isPresent])

    return (
        <StyledTask ref={scope} $isCheck={isChecked}>
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
})

export default Task
