import { taskControlsDict } from '@/dictionaries/taskControlsDict'
import { ButtonMenu, DropdownButton } from './TaskControls.styles'
import Button from '@/ui/Button/Button'

const TaskControls = () => {
    return (
        <DropdownButton>
            <Button variant='image-like' />
            <ButtonMenu>
                {taskControlsDict.map(el => (
                    <li key={el.id}>
                        <Button variant={el.variant} onClick={el.act} />
                    </li>
                ))}
            </ButtonMenu>
        </DropdownButton>
    )
}

export default TaskControls
