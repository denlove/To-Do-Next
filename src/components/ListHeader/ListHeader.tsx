import Heading from '@/ui/Heading/Heading'
import Paragraph from '@/ui/Paragraph/Paragraph'

const ListHeader = () => {
    return (
        <article>
            <hgroup>
                <Heading elem='h1' content='Gorgeous To-Do List' />
                <Paragraph content='Welcome, friend' />
            </hgroup>
        </article>
    )
}

export default ListHeader
