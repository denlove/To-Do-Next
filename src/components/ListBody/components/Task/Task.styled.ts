import styled, { css } from 'styled-components'
import { displayFlex } from '@/styles/templates'

interface IStyledTask {
    $isCheck: boolean | undefined
}

const StyledTask = styled.li<IStyledTask>`
    ${displayFlex({ jc: 'space-between' })};
    width: 100%;
    min-height: 2.5rem;
    overflow: hidden;
    user-select: none;
    transition: all 0.3s linear;
    opacity: 0;
    transform: translateX(3rem);

    ${({ $isCheck }) => $isCheck && endOfList}

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

const StyledLable = styled.label`
    overflow: hidden;
    ${displayFlex({ jc: 'space-between', gp: '0.5rem' })};
    position: relative;
    padding-right: 0.5rem;
    height: 100%;
`

const strikeCss = css`
    width: 100%;
    opacity: 1;
`

const endOfList = css`
    animation: drag 0.2s linear 0s 2 alternate forwards;
    order: 99;
    & textarea {
        color: var(--color-0-0-50);
    }

    @keyframes drag {
        to {
            transform: translateX(0.5rem);
        }
    }
`

export { StyledTask, StyledLable }
