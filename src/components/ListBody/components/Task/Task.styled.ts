import { displayFlex } from '@/styles/templates'
import styled, { css } from 'styled-components'

interface IStyledTask {
    $isCheck: boolean | undefined
}

const StyledTask = styled.li<IStyledTask>`
    ${displayFlex({ jc: 'space-between' })};
    width: 100%;
    overflow: hidden;
    font-size: var(--fs-18);
    font-family: var(--ff-roboto);
    color: var(--color-0-0-30);
    user-select: none;

    & label::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        border: var(--strike-border);
        width: 0%;
        opacity: 0;
        transition:
            width 0.5s ease-in,
            opacity 0.5s ease-in;

        ${({ $isCheck }) => $isCheck && strikeCss}
    }
`

const strikeCss = css`
    width: 100%;
    opacity: 1;
`

export { StyledTask }
