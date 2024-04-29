import styled, { css } from 'styled-components'
import { box } from '@/styles/templates'
import { InputTypes } from '@/types/types'

interface IStyledInput {
    type: InputTypes
    value?: string
}

const StyledInput = styled.input<IStyledInput>`
    background-color: transparent;
    transition: all 0.2s linear;

    ${({ type }) => (type === 'checkbox' ? checkboxInputCss : textInputCss)}
`

const textInputCss = css<IStyledInput>`
    font-size: var(--fs-20);
    font-family: var(--ff-roboto);
    color: var(--color-0-0-30);
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    border-radius: var(--r-16);
    min-width: 3rem;
    width: ${({ value }) => (value ? (value.length + 5) * 10 + 'px' : '12rem')};

    &:focus {
        background-color: var(--color-0-0-90);
    }

    &::placeholder {
        font-size: var(--fs-18);
        color: var(--color-0-0-75);
    }
`

const checkboxInputCss = css`
    ${box('1.5rem')};
    margin: 6px;
    padding: 0;
    border: 2px solid var(--checkbox-border-color);
    appearance: none;
    outline: 0px solid transparent;
    border-radius: var(--r-8);
    flex-shrink: 0;

    &:focus-visible {
        outline: 3px solid var(--checkbox-hover-color);
        transform: scale(1.05);
    }

    &:checked {
        opacity: 1;
        background-size: cover;
        padding: 3px;
    }

    &:not(:disabled) {
        @media (hover: hover) {
            &:hover {
                background-color: var(--checkbox-hover-color);
                outline: 3px solid var(--checkbox-hover-color);
                transform: scale(1.05);
            }
        }

        &:checked {
            border-color: var(--checkbox-checked-color);
            background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="none" stroke="%23bfbfbf" stroke-linecap="round" stroke-width="3" d="m5 14l3.233 2.425a1 1 0 0 0 1.374-.167L18 6"/></svg>');
            background-position: center;
        }
    }

    &:disabled {
        background-color: var(--checkbox-disabled-bg-color);

        &:checked {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 32 32" xml:space="preserve"><path style="fill: %238b8c89" d="M11.941,28.877l-11.941-11.942l5.695-5.696l6.246,6.246l14.364-14.364L32,8.818"/></svg>');
        }
    }
`

export { StyledInput }
