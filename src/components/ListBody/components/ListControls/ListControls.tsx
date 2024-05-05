'use client'

import { memo } from 'react'
import { useSetListControls } from './hooks/useSetListControls'
import Button from '@/ui/Button/Button'
import { ControlsArticle, ControlsMenu, ListItem } from './ListControls.styled'

const ListControls = memo(function ListControls() {
    const buttonsDict = useSetListControls()

    return (
        <ControlsArticle>
            <ControlsMenu>
                {buttonsDict.map(({ id, act, svg, variant }) => (
                    <ListItem key={id}>
                        <Button onClick={act} variant={variant} text='Add task'>
                            {svg}
                        </Button>
                    </ListItem>
                ))}
            </ControlsMenu>
        </ControlsArticle>
    )
})

export default ListControls
