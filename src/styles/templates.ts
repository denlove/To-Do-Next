import { IDefAllProperties } from '@/types/interfacesBP'
import { css } from 'styled-components'

interface IDisplayFlex extends IDefAllProperties<string> {}

export const displayFlex = ({ jc, ai }: IDisplayFlex) => {
    return css`
        display: flex;
        justify-content: ${jc};
        align-items: ${ai};
    `
}
