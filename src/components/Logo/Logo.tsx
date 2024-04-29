import { logoDict } from '@/dictionaries/logoDict'
import LinkedImage from '@/ui/LinkedImage/LinkedImage'
import styles from './Logo.module.scss'

const Logo = () => {
    return (
        <div className={styles.logo}>
            {logoDict.map(el => {
                return (
                    <LinkedImage
                        key={el.id}
                        href={el.href}
                        src={el.src}
                        alt={el.alt}
                    />
                )
            })}
        </div>
    )
}

export default Logo
