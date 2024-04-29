import { addTask, taskSelector } from '@/redux/features/taskSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { ITaskControls } from '@/types/interfaces'

export const useSetListControls = (): Array<ITaskControls> => {
    const todos = useAppSelector(taskSelector)
    const dispatch = useAppDispatch()

    const handleAddTask = () => {
        if (!todos[0]) {
            dispatch(addTask())
        } else if (todos.every(el => el.content)) {
            dispatch(addTask())
        }
    }

    return [{ id: 1, act: handleAddTask, variant: 'primary' }]
}
