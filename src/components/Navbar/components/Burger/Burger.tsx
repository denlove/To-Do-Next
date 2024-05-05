import { memo } from 'react'
import { useAnimate } from 'framer-motion'
import Button from '@/ui/Button/Button'
import BurgerSvg from '../../../../../public/assets/burger.svg'
import { StyledBurger } from './Burger.styled'

interface IBurger {
    onClick(): void
}

const Burger = memo(function Burger({ onClick }: IBurger) {
    const [scope, animate] = useAnimate()

    return (
        <StyledBurger ref={scope}>
            <Button
                onClick={() => {
                    onClick()
                    animate(
                        scope.current,
                        { scale: [0.8, 1.01, 1], rotate: [5, 0] },
                        {
                            duration: 0.5,
                            type: 'spring',
                            damping: 5,
                            ease: 'easeIn',
                            stiffness: 50,
                        },
                    )
                }}
                variant='image-like'
            >
                <BurgerSvg />
            </Button>
        </StyledBurger>
    )
})

export default Burger
