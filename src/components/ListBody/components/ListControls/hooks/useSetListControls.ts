import { addTask, taskSelector } from '@/redux/features/taskSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { RootState } from '@/redux/store'
import { ITaskControls } from '@/types/interfaces'

export const useSetListControls = (): Array<ITaskControls> => {
    const todos = useAppSelector((state: RootState) => state.taskManager.todos)
    const dispatch = useAppDispatch()

    const handleAddTask = () => {
        const length = todos.length

        if (!length) {
            dispatch(addTask())
        } else if (todos.every(el => el.content)) {
            dispatch(addTask())
        }
    }

    return [{ id: 1, act: handleAddTask, variant: 'primary' }]
}
