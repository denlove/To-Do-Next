import { taskDict } from '@/dictionaries/taskDict'
import ListControls from './components/ListControls/ListControls'
import Task from './components/Task/Task'

const ListBody = () => {
    return (
        <form>
            <ul>
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
