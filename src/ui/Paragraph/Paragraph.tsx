'use client'

import styled from 'styled-components'
import { IContent } from '@/types/interfaces'

interface IParagraph extends IContent<string> {}

const StyledParagraph = styled.p`
    color: blue;
`

const Paragraph = ({ content }: IParagraph) => {
    return <StyledParagraph>{content}</StyledParagraph>
}

export default Paragraph
