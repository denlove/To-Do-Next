import Heading from '@/ui/Heading/Heading'
import Paragraph from '@/ui/Paragraph/Paragraph'
import { CURRENT_YEAR, RESERVED_RIGHTS } from '@/utils/contents'
import styles from './Reserved.module.scss'

const ReservedRights = () => {
    return (
        <hgroup className={styles['rights-block']}>
            <Heading elem='h3' content={RESERVED_RIGHTS} />
            <Paragraph content={CURRENT_YEAR} />
        </hgroup>
    )
}

export default ReservedRights
