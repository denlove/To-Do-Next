import styled from 'styled-components'

const StyledSpan = styled.span`
    font-size: var(--fs-18);
    color: var(--color-0-0-50);
    font-family: var(--ff-roboto);
    margin: 2rem 0;
    text-align: center;
    line-height: 2rem;
`

const NoTasks = () => {
    return (
        <StyledSpan>
            Wow... <br />
            There are no tasks. Press &quot;Add task&quot; below
        </StyledSpan>
    )
}

export default NoTasks
