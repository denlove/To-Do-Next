'use client'

import styled from 'styled-components'
import { IContent } from '@/types/interfacesBP'
import { Headings } from '@/types/types'

interface IHeading extends IContent<string> {
    elem: Headings
}

const StyledHeading = styled.h1``

const Heading = ({ elem, content }: IHeading) => {
    return <StyledHeading as={elem}>{content}</StyledHeading>
}

export default Heading
