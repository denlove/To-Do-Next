import MainArea from '@/components/MainArea/MainArea'
import { RoutesType } from '@/types/types'
import Wrapper from '@/wrappers/Wrapper'
import styles from './DescriptiveArea.module.scss'

interface IAreaProps {
    path: RoutesType
}

const DescriptiveArea = ({ path }: IAreaProps) => {
    return (
        <div className={styles['desc-area']}>
            <Wrapper variant='task-area'>
                <MainArea className={styles['desc-area__main']} path={path} />
            </Wrapper>
        </div>
    )
}

export default DescriptiveArea
