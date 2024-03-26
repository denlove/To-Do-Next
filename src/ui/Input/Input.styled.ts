import { InputTypes } from '@/types/types'
import styled from 'styled-components'

interface IStyledInput {
    type: InputTypes
}

const StyledInput = styled.input<IStyledInput>`
    background-color: ${({ type }) => (type === 'text' ? 'brown' : 'orange')};
`

export default StyledInput
