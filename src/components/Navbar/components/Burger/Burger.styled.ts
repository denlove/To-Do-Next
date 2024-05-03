import styled, { css } from 'styled-components'
import { media, mediaQuery } from '@/styles/media'
import { LARGE_MOBILE } from '@/utils/contents'

const StyledBurger = styled.div`
    display: none;

    ${mediaQuery(
        LARGE_MOBILE,
        css`
            display: block;
        `,
    )}
`

export { StyledBurger }
