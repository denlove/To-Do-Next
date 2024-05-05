import { IContent } from '@/types/interfacesBP'
import Paragraph from '@/ui/Paragraph/Paragraph'
import styles from './AboutBody.module.scss'

const AboutBody = ({ content }: IContent<string>) => {
    return (
        <div className={styles['about-body']}>
            <Paragraph content={content} />
        </div>
    )
}

export default AboutBody
