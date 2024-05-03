import styled, { css } from 'styled-components'
import { mediaQuery } from '@/styles/media'
import { AllKeyWith$Prefix } from '@/types/types'
import { LARGE_MOBILE, MOBILE } from '@/utils/contents'
import { IGrowTextArea } from './GrowTextArea'

type PropsStyles = AllKeyWith$Prefix<Pick<IGrowTextArea, 'areaValue'>>

const GrowArea = styled.div<PropsStyles>`
    display: grid;
    width: 100%;

    &::after {
        content: attr(data-replicated-value) ' ';
        white-space: pre-wrap;
        visibility: hidden;
    }

    & > textarea {
        resize: none;
        overflow: hidden;
        color: var(--color-0-0-30);
        transition: all 0.1s linear;
    }

    & > textarea,
    &::after {
        font-size: var(--fs-20);
        font-family: var(--ff-roboto);
        height: 100%;
        padding: 0.5rem 1rem 0.5rem 1rem;
        border-radius: var(--r-16);
        min-width: 3rem;
        max-width: 20rem;
        width: ${({ $areaValue }) =>
            $areaValue ? (`${$areaValue}`.length + 8) * 10 + 'px' : '9rem'};
        grid-area: 1 / 1 / 2 / 2;

        ${mediaQuery(
            LARGE_MOBILE,
            css`
                max-width: 50vw;
            `,
        )}
    }
`

export { GrowArea }
