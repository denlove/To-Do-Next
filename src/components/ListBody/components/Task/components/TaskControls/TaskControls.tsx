'use client'

import React, { memo } from 'react'
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
                <ExtraSvg />
            </Button>
            <ButtonMenu $isOpened={isOpenMenu}>
                {dict.map(({ id, act, svg, variant }) => (
                    <Option key={id} $svgId={id}>
                        <Button variant={variant} onClick={act}>
                            ({svg})
                        </Button>
                    </Option>
                ))}
            </ButtonMenu>
        </DropdownButton>
    )
})

export default TaskControls
