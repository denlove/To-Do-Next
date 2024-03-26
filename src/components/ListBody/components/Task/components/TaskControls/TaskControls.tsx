'use client'

import { taskControlsDict } from '@/dictionaries/taskControlsDict'
import Button from '@/ui/Button/Button'

const TaskControls = () => {
    return (
        <aside>
            <Button variant='image-like' />
            <ul>
                {taskControlsDict.map(el => (
                    <li key={el.id}>
                        <Button variant={el.variant} onClick={el.act} />
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default TaskControls
