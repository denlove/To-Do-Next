import Heading from '@/ui/Heading/Heading'
import Paragraph from '@/ui/Paragraph/Paragraph'
import style from './PageTitle.module.scss'

interface IPageTitle {
    hContent: string
    pContent: string
}

const PageTitle = ({ hContent, pContent }: IPageTitle) => {
    return (
        <hgroup className={style.headings}>
            <Heading elem='h1' content={hContent} />
            <Paragraph content={pContent} />
        </hgroup>
    )
}

export default PageTitle
