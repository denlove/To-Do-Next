import { FlexStyles } from '@/types/types'
import { css } from 'styled-components'

type DisplayFlexType = Partial<{
    [k in FlexStyles]: string
}>

export const displayFlex = ({
    jc = 'center',
    ai = 'center',
    fd = 'row',
    gp = '0',
}: DisplayFlexType) => {
    return css`
        display: flex;
        flex-direction: ${fd};
        justify-content: ${jc};
        align-items: ${ai};
        gap: ${gp};
    `
}