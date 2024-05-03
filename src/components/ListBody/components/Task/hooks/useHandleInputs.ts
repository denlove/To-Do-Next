import { ChangeEvent, FocusEvent, useState } from 'react'
import { editTask, toggleCheck } from '@/redux/features/taskSlice'
import { useAppDispatch } from '@/redux/hooks'

export const useHandleInputs = (
    id: string,
    isCheck: boolean,
    content: string,
) => {
    const dispatch = useAppDispatch()
    const [isChecked, setIsChecked] = useState<boolean>(isCheck)
    const [areaValue, setAreaValue] = useState<string>(content)

    const handleCheckBoxChange = () => {
        setIsChecked(pre => !pre)
        dispatch(toggleCheck(id))
    }

    const handleTextInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAreaValue(e.target.value)
    }

    const editTaskText = (
        e: FocusEvent<HTMLTextAreaElement>,
        id: string,
        initValue: string,
    ) => {
        const currentValue = e.target.value

        if (initValue !== currentValue) {
            dispatch(editTask({ id, content: currentValue }))
        }
    }

    return {
        isChecked,
        handleCheckBoxChange,
        areaValue,
        handleTextInputChange,
        editTaskText,
    }
}
