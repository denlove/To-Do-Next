import { InputMouse } from '@/types/types'

const disableEditing = (e: InputMouse) => {
    e.preventDefault()
    e.stopPropagation()
}

const focusTextInput = (e: InputMouse) => {
    e.preventDefault()
    e.stopPropagation()
    const textInput = e.target as HTMLInputElement
    textInput.focus()
}

export { disableEditing, focusTextInput }
