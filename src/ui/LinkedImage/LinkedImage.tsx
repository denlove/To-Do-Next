import Image from 'next/image'
import Link from 'next/link'
import { ILinkedImage } from '@/types/interfaces'

const LinkedImage = ({ href, src, alt }: ILinkedImage) => {
    return (
        <Link href={href}>
            <Image src={src} alt={alt} />
        </Link>
    )
}

export default LinkedImage
