import c from 'classnames'
import Logo from '@/components/Logo/Logo'
import Navbar from '@/components/Navbar/Navbar'
import Wrapper from '@/wrappers/Wrapper'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={c(styles.header, styles.header_pos)}>
            <Wrapper variant='header'>
                <Logo />
                <Navbar />
            </Wrapper>
        </header>
    )
}

export default Header
