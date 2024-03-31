'use client'

import { IClassName, IParamChildren } from '@/types/interfacesBP'
import { WrapperVariants } from '@/types/types'
import { StyledWrapper } from './Wrapper.styled'

interface IWrapper extends IParamChildren, Partial<IClassName> {
    variant: WrapperVariants
}

const Wrapper = ({ children, variant }: IWrapper) => {
    return <StyledWrapper $variant={variant}>{children}</StyledWrapper>
}

export default Wrapper
