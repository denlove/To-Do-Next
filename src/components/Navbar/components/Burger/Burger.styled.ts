import styled, { css } from 'styled-components'
import { media, mediaQuery } from '@/styles/media'

const StyledBurger = styled.div`
    display: none;

    ${mediaQuery(
        media.mobile,
        css`
            display: block;
        `,
    )}
`

export { StyledBurger }
