'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { taskControlsDict } from '@/dictionaries/taskControlsDict'
import ExtraSvg from '../../../../../../../public/assets/extra_dots.svg'
import Button from '@/ui/Button/Button'
import { ButtonMenu, DropdownButton, Option } from './TaskControls.styled'

const TaskControls = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const handleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
        setOpenMenu(!openMenu)
    }

    return (
        <DropdownButton>
            <Button variant='image-like' onClick={handleDropdown}>
                <Image src={ExtraSvg} alt='Task options button' />
            </Button>
            <ButtonMenu $isOpened={openMenu}>
                {taskControlsDict.map(el => (
                    <Option key={el.id}>
                        <Button variant={el.variant} onClick={el.act}>
                            <Image
                                src={el.options?.bg}
                                alt={el.options?.alt as string}
                            />
                        </Button>
                    </Option>
                ))}
            </ButtonMenu>
        </DropdownButton>
    )
}

export default TaskControls
