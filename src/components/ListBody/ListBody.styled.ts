import styled from 'styled-components'
import { displayFlex } from '@/styles/templates'

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
    ${displayFlex({ fd: 'column', gp: '0.5rem' })}
`

export { MainForm, TaskList }