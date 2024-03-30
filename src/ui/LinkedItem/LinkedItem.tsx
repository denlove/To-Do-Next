'use client'

import Link from 'next/link'
import { INavbarItem } from '@/types/interfaces'
import { StyledLinkedItem } from './LInkedItem.styles'

const LinkedItem = ({ content, route, isActive }: INavbarItem) => {
    return (
        <StyledLinkedItem $isActive={isActive}>
            <Link href={route}>{content}</Link>
        </StyledLinkedItem>
    )
}

export default LinkedItem
