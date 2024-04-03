'use client'

import c from 'classnames'
import Heading from '@/ui/Heading/Heading'
import Paragraph from '@/ui/Paragraph/Paragraph'
import { IClassName } from '@/types/interfacesBP'
import { HeadingGroup, StyledArticle } from './ListHeader.styled'

const ListHeader = ({ className }: Partial<IClassName>) => {
    return (
        <StyledArticle className={className}>
            <HeadingGroup>
                <Heading elem='h1' content='Gorgeous To-Do List' />
                <Paragraph content='Welcome, friend' />
            </HeadingGroup>
        </StyledArticle>
    )
}

export default ListHeader
