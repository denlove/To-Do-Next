import { listControlsDict } from '@/dictionaries/listControlsDict'
import Button from '@/ui/Button/Button'

const ListControls = () => {
    return (
        <article>
            <menu>
                {listControlsDict.map(el => (
                    <li key={el.id}>
                        <Button variant='primary' />
                    </li>
                ))}
            </menu>
        </article>
    )
}

export default ListControls
