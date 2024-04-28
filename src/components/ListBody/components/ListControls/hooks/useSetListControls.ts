import { addTask } from '@/redux/features/taskSlice'
import { useAppDispatch } from '@/redux/hooks'
import { ITaskControls } from '@/types/interfaces'

export const useSetListControls = (): Array<ITaskControls> => {
    const dispatch = useAppDispatch()

    const handleAddTask = () => {
        dispatch(addTask())
    }

    return [{ id: 1, act: handleAddTask, variant: 'primary' }]
}
