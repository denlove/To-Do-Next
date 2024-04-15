'use client'

import { IContent } from '@/types/interfacesBP'
import { Headings } from '@/types/types'
import styled from 'styled-components'

interface IHeading extends IContent<string> {
    elem: Headings
}

const StyledHeading = styled.h1``

const Heading = ({ elem, content }: IHeading) => {
    return <StyledHeading as={elem}>{content}</StyledHeading>
}

export default Heading
