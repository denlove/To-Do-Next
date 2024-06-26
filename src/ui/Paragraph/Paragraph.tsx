'use client'

import styled from 'styled-components'
import { IContent } from '@/types/interfacesBP'

interface IParagraph extends IContent<string> {}

const StyledParagraph = styled.p``

const Paragraph = ({ content }: IParagraph) => {
    return <StyledParagraph>{content}</StyledParagraph>
}

export default Paragraph
