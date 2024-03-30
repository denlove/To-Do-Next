import c from 'classnames'
import Heading from '@/ui/Heading/Heading'
import Paragraph from '@/ui/Paragraph/Paragraph'
import styles from './ListHeader.module.scss'
import { IClassName } from '@/types/interfacesBP'

const ListHeader = ({ className }: Partial<IClassName>) => {
    return (
        <article className={c(styles['list-header'], className)}>
            <hgroup className={styles['list-header__hgroup']}>
                <Heading elem='h1' content='Gorgeous To-Do List' />
                <Paragraph content='Welcome, friend' />
            </hgroup>
        </article>
    )
}

export default ListHeader
