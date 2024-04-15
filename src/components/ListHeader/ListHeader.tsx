'use client'

import Heading from '@/ui/Heading/Heading'
import Paragraph from '@/ui/Paragraph/Paragraph'
import { IClassName } from '@/types/interfacesBP'
import { HeadingGroup, StyledArticle } from './ListHeader.styled'

const ListHeader = ({ className }: Partial<IClassName>) => {
    return (
        <StyledArticle className={className}>
            <HeadingGroup>
                <Heading elem='h1' content='Gorgeous To-Do' />
                <Paragraph content='hey there, mate' />
            </HeadingGroup>
        </StyledArticle>
    )
}

export default ListHeader
