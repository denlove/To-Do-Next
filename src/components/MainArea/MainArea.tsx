import c from 'classnames'
import { RoutesType } from '@/types/types'
import {
    ABOUT_CONTENT,
    ABOUT_HEADING,
    ABOUT_PARAGRAPH,
    HELP_CONTENT,
    HELP_HEADING,
    HELP_PARAGRAPH,
    NOT_FOUND_HEADING,
    NOT_FOUND_PARAGRAPH,
} from '@/utils/contents'
import { ABOUT_ROUTE, HELP_ROUTE } from '@/utils/routes'
import PageTitle from '../PageTitle/PageTitle'
import AboutBody from './components/AboutBody/AboutBody'
import styles from './MainArea.module.scss'

interface IAreaProps {
    path: RoutesType
    className: string
}

const MainArea = ({ className, path }: IAreaProps) => {
    return (
        <main className={c(className, styles.main)}>
            <article className={styles.main__content}>
                {(() => {
                    switch (path) {
                        case ABOUT_ROUTE:
                            return (
                                <>
                                    <PageTitle
                                        hContent={ABOUT_HEADING}
                                        pContent={ABOUT_PARAGRAPH}
                                    />
                                    <AboutBody content={ABOUT_CONTENT} />
                                </>
                            )

                        case HELP_ROUTE:
                            return (
                                <>
                                    <PageTitle
                                        hContent={HELP_HEADING}
                                        pContent={HELP_PARAGRAPH}
                                    />
                                    <AboutBody content={HELP_CONTENT} />
                                </>
                            )

                        default:
                            return (
                                <>
                                    <PageTitle
                                        hContent={NOT_FOUND_HEADING}
                                        pContent={NOT_FOUND_PARAGRAPH}
                                    />
                                </>
                            )
                    }
                })()}
            </article>
        </main>
    )
}

export default MainArea
