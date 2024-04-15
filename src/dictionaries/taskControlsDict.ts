import { ITaskControls } from '@/types/interfaces'
import MarkSvg from '../../public/assets/mark.svg'
import DoneSvg from '../../public/assets/done.svg'

export const taskControlsDict: Array<ITaskControls> = [
    {
        id: 1,
        act: () => {},
        variant: 'image-like',
        options: { bg: DoneSvg, alt: 'Task done button' },
    },
    {
        id: 2,
        act: () => {},
        variant: 'image-like',
        options: { bg: MarkSvg, alt: 'Task delete button' },
    },
]
