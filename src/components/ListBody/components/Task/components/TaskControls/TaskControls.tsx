'use client'

import React, { memo } from 'react'
import Image from 'next/image'
import { useSetTaskControls } from './hooks/useSetTaskControls'
import Button from '@/ui/Button/Button'
import ExtraSvg from '../../../../../../../public/assets/extra_dots.svg'
import { ButtonMenu, DropdownButton, Option } from './TaskControls.styled'

interface ITaskControls {
    id: string
    toggleCheck(): void
}

const TaskControls = memo(function TaskControls({
    id,
    toggleCheck,
}: ITaskControls) {
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
})

export default TaskControls
