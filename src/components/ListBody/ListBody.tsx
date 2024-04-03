import { taskDict } from '@/dictionaries/taskDict'
import ListControls from './components/ListControls/ListControls'
import Task from './components/Task/Task'
import styles from './ListBody.module.scss'

const ListBody = () => {
    return (
        <form className={styles.form}>
            <ul className={styles.form__list}>
                {taskDict.map(el => (
                    <Task
                        key={el.id}
                        content={el.content}
                        isCheck={el.isCheck}
                    />
                ))}
            </ul>
            <ListControls />
        </form>
    )
}

export default ListBody
