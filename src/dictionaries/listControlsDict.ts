import { ITaskControls } from '@/types/interfaces'

interface IListControls extends ITaskControls {}

export const listControlsDict: Array<IListControls> = [
    { id: 1, act: () => {}, variant: 'primary' },
]
