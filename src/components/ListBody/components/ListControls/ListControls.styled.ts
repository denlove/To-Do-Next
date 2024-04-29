import styled from 'styled-components'
import { displayFlex } from '@/styles/templates'

const ControlsArticle = styled.article`
    width: 100%;
    margin-top: 1rem;
`

const ControlsMenu = styled.menu`
    width: fit-content;
    list-style-type: none;
    ${displayFlex({ fw: 'wrap' })}
    margin: 0 auto;
`

const ListItem = styled.li`
    width: fit-content;

    & button {
        border: var(--add-button-border);
        font-size: var(--fs-18);
        font-family: var(--ff-roboto);
        padding: 0.5rem 0.75rem;
        color: var(--color-0-0-30);

        &:hover {
            background-color: var(--color-120-50-90);
        }
    }
`

export { ControlsArticle, ControlsMenu, ListItem }
