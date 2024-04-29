import { useState } from 'react'
import { editTask, toggleCheck } from '@/redux/features/taskSlice'
import { useAppDispatch } from '@/redux/hooks'
import { InputChange, InputFocus, InputMouse } from '@/types/types'

export const useHandleInputs = (
    id: string,
    isCheck: boolean,
    content: string,
) => {
    const dispatch = useAppDispatch()
    const [isChecked, setIsChecked] = useState<boolean>(isCheck)
    const [inputValue, setInputValue] = useState<string>(content)

    const handleCheckBoxChange = () => {
        setIsChecked(pre => !pre)
        dispatch(toggleCheck(id))
    }

    const handleTextInputChange = (e: InputChange) => {
        setInputValue(e.target.value)
    }

    const editTaskText = (e: InputFocus, id: string, initValue: string) => {
        const currentValue = e.target.value

        if (initValue !== currentValue) {
            dispatch(editTask({ id, content: currentValue }))
        }
    }

    return {
        isChecked,
        handleCheckBoxChange,
        inputValue,
        handleTextInputChange,
        editTaskText,
    }
}
