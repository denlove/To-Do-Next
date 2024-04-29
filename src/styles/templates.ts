import { css } from 'styled-components'
import { FlexStyles } from '@/types/types'

type DisplayFlexType = Partial<{
    [k in FlexStyles]: string
}>

const displayFlex = ({ jc, ai, fd, gp, fw }: DisplayFlexType) => {
    return css`
        display: flex;
        flex-direction: ${fd || 'row'};
        justify-content: ${jc || 'center'};
        align-items: ${ai || 'center'};
        gap: ${gp || '0'};
        flex-wrap: ${fw || 'nowrap'};
    `
}

const box = (width: string) => {
    return css`
        width: ${width};
        height: ${width};
    `
}

export { displayFlex, box }
