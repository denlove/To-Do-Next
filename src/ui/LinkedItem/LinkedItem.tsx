import { INavbarItem } from '@/types/interfaces'
import Link from 'next/link'

const LinkedItem = ({ content, route }: INavbarItem) => {
    return (
        <li>
            <Link href={route}>{content}</Link>
        </li>
    )
}

export default LinkedItem
