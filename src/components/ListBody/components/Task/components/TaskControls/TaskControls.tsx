'use client'

import Image from 'next/image'
import React from 'react'
import ExtraSvg from '../../../../../../../public/assets/extra_dots.svg'
import Button from '@/ui/Button/Button'
import { ButtonMenu, DropdownButton, Option } from './TaskControls.styled'
import { useSetTaskControls } from './hooks/useSetTaskControls'

interface ITaskControls {
    id: string
    toggleCheck(): void
}

const TaskControls = ({ id, toggleCheck }: ITaskControls) => {
    const { isOpenMenu, handleDropdown, dict } = useSetTaskControls(
        id,
        toggleCheck,
    )

    return (
        <DropdownButton>
            <Button variant='image-like' onClick={handleDropdown}>
                <Image src={ExtraSvg} alt='Task options button' />
            </Button>
            <ButtonMenu $isOpened={isOpenMenu}>
                {dict.map(el => (
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
