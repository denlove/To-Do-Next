import { useState } from 'react'
import { removeTask } from '@/redux/features/taskSlice'
import { useAppDispatch } from '@/redux/hooks'
import { ITaskControls } from '@/types/interfaces'
import DoneSvg from '../../../../../../../../public/assets/done.svg'
import MarkSvg from '../../../../../../../../public/assets/mark.svg'

export const useSetTaskControls = (id: string, toggleCheck: () => void) => {
    const dispatch = useAppDispatch()
    const [isOpenMenu, setOpenMenu] = useState<boolean>(false)

    const handleDropdown = () => {
        setOpenMenu(pre => !pre)
    }

    const toggleTask = () => {
        toggleCheck()
        handleDropdown()
    }

    const deleteTask = () => {
        dispatch(removeTask(id))
        handleDropdown()
    }

    return {
        isOpenMenu,
        handleDropdown,
        dict: [
            {
                id: 1,
                act: toggleTask,
                variant: 'image-like',
                svg: <DoneSvg />,
            },
            {
                id: 2,
                act: deleteTask,
                variant: 'image-like',
                svg: <MarkSvg />,
            },
        ] as Array<ITaskControls>,
    }
}
