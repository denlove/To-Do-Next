import Heading from '@/ui/Heading/Heading'
import Paragraph from '@/ui/Paragraph/Paragraph'
import { CURRENT_YEAR, RESERVED_RIGHTS } from '@/utils/contents'

const ReservedRights = () => {
    return (
        <hgroup>
            <Heading elem='h3' content={RESERVED_RIGHTS} />
            <Paragraph content={CURRENT_YEAR} />
        </hgroup>
    )
}

export default ReservedRights
