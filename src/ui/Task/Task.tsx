'use client'

import { ITaskInfo } from '@/types/interfaces'
import Input from '../Input/Input'

const Task = ({ content }: ITaskInfo) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const elem = e.target
        console.log(elem, elem.checked)
    }

    return (
        <li>
            <label>
                <Input
                    onChange={handleChange}
                    type='checkbox'
                    isCheck={undefined}
                />
                {content}
            </label>
        </li>
    )
}

export default Task
