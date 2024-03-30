import ReservedRights from '@/components/ReservedRights/ReservedRights'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer id={styles.footer}>
            <ReservedRights />
        </footer>
    )
}

export default Footer
