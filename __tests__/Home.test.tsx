import { render, screen } from '@testing-library/react'
import HomePage from '../src/app/page'

describe('Page', () => {
    it('renders a main element', () => {
        render(<HomePage />)

        const main = screen.getByRole('main')

        expect(main).toBeInTheDocument()
    })
})
