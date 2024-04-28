'use client'

import Image from 'next/image'
import { useSetListControls } from './hooks/useSetListControls'
import PlusSvg from '../../../../../public/assets/plus.svg'
import Button from '@/ui/Button/Button'
import { ControlsArticle, ControlsMenu, ListItem } from './ListControls.styled'

const ListControls = () => {
    const buttonsDict = useSetListControls()

    return (
        <ControlsArticle>
            <ControlsMenu>
                {buttonsDict.map(el => (
                    <ListItem key={el.id}>
                        <Button
                            onClick={el.act}
                            variant='primary'
                            text='Add task'
                        >
                            <Image src={PlusSvg} alt='' />
                        </Button>
                    </ListItem>
                ))}
            </ControlsMenu>
        </ControlsArticle>
    )
}

export default ListControls
