'use client'

import { IContent } from '@/types/interfaces'
import styled from 'styled-components'

interface IHeading extends IContent<string> {
    elem: string
}

const StyledHeading = styled.h1`
    color: red;
`

const Heading = ({ elem, content }: IHeading) => {
    return <StyledHeading as={elem}>{content}</StyledHeading>
}

export default Heading
