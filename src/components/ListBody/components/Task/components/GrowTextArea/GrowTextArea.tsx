import React from 'react'
import { ITaskInfo } from '@/types/interfaces'
import TextArea from '@/ui/TextArea/TextArea'
import { GrowArea } from './GrowTextArea.styled'

export interface IGrowTextArea extends Pick<ITaskInfo, 'id' | 'content'> {
    areaValue: string
    changeAreaValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    editTaskText: (
        e: React.FocusEvent<HTMLTextAreaElement>,
        id: string,
        initValue: string,
    ) => void
}

const GrowTextArea = ({
    id,
    content,
    areaValue,
    changeAreaValue,
    editTaskText,
}: IGrowTextArea) => {
    const replicateAreaValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const elem = e.target
        elem.parentElement &&
            (elem.parentElement.dataset.replicatedValue = elem.value)
    }

    return (
        <GrowArea $areaValue={areaValue} data-replicated-value={content}>
            <TextArea
                id={`text-${id}`}
                name='task-textarea'
                variant='task-area'
                autoComplete='off'
                placeholder='Click to edit'
                value={areaValue}
                rows={1}
                onInput={replicateAreaValue}
                onChange={changeAreaValue}
                onBlur={e => editTaskText(e, id, content)}
                autoFocus={!areaValue}
            />
        </GrowArea>
    )
}

export default GrowTextArea
