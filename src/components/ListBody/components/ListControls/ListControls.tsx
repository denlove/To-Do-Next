import { listControlsDict } from '@/dictionaries/listControlsDict'
import Button from '@/ui/Button/Button'
import styles from './ListControls.module.scss'

const ListControls = () => {
    return (
        <article className={styles['list-controls']}>
            <menu className={styles['list-controls__menu']}>
                {listControlsDict.map(el => (
                    <li key={el.id}>
                        <Button variant='primary' />
                    </li>
                ))}
            </menu>
        </article>
    )
}

export default ListControls
