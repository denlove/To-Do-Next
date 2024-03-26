import Logo from '@/components/Logo/Logo'
import Navbar from '@/components/Navbar/Navbar'
import GeneralWrapper from '@/wrappers/GeneralWrapper'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header id={styles.header}>
            <GeneralWrapper>
                <Logo />
                <Navbar />
            </GeneralWrapper>
        </header>
    )
}

export default Header
