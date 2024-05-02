import Image from 'next/image'
import Button from '@/ui/Button/Button'
import BurgerSvg from '../../../../../public/assets/burger.svg'
import { StyledBurger } from './Burger.styled'

interface IBurger {
    onClick(): void
}

const Burger = ({ onClick }: IBurger) => {
    return (
        <StyledBurger>
            <Button onClick={onClick} variant='image-like'>
                <Image src={BurgerSvg} alt='Navigation menu' />
            </Button>
        </StyledBurger>
    )
}

export default Burger
