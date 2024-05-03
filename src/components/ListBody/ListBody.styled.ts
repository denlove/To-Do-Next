import styled, { css } from 'styled-components'
import { mediaQuery } from '@/styles/media'
import { displayFlex } from '@/styles/templates'
import { MOBILE } from '@/utils/contents'

const MainForm = styled.form<React.HTMLProps<HTMLFormElement>>`
    max-width: 37.5rem;
    width: 100%;
    margin: 0 auto;
`

const TaskList = styled.ul`
    list-style-type: none;
    border-radius: var(--r-20);
    border: var(--list-border);
    padding: 1rem 1.5rem;
    margin: 0 1rem;
    ${displayFlex({ fw: 'wrap', gp: '0.5rem' })};

    ${mediaQuery(
        MOBILE,
        css`
            padding: 0.5rem;
        `,
    )}
`

export { MainForm, TaskList }
