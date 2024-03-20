import { IParamChildren } from '@/types/interfaces'
import Link from 'next/link'

interface ILinkedItem extends IParamChildren {
    text: string
    route: string
}

const LinkedItem = ({ children, text, route }: ILinkedItem) => {
    return (
        <li>
            <Link href={route}>
                {children}
                {text}
            </Link>
        </li>
    )
}

export default LinkedItem
