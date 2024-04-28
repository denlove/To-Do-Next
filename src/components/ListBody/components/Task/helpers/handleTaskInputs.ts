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

const resizeByContent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement
    input.style.width = (input.value.length + 5) * 10 + 'px'
}

export { disableEditing, focusTextInput, resizeByContent }
