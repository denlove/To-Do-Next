import c from 'classnames'
import ListBody from '@/components/ListBody/ListBody'
import ListHeader from '@/components/ListHeader/ListHeader'
import Wrapper from '@/wrappers/Wrapper'
import styles from './TaskArea.module.scss'

const TaskArea = () => {
    return (
        <div className={c(styles['task-area'], styles['task-area_pos'])}>
            <Wrapper variant='task-area'>
                <ListHeader className={styles['task-area__list-header']} />
                <main id='main'>
                    <ListBody />
                </main>
            </Wrapper>
        </div>
    )
}

export default TaskArea
