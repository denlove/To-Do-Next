import { navbarDict } from '@/dictionaries/navbarDict'
import Button from '@/ui/Button/Button'
import LinkedItem from '@/ui/LinkedItem/LinkedItem'

const Navbar = () => {
    return (
        <nav>
            <ul>
                {navbarDict.map(el => {
                    return (
                        <LinkedItem
                            key={el.id}
                            route={el.route}
                            content={el.content}
                        />
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar
