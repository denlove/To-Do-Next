import { render, screen } from '@testing-library/react'
import HomePage from '../src/app/page'
import ReduxProvider from '@/lib/providers/ReduxProvider'

describe('Page', () => {
    it('renders a main element', () => {
        render(
            <ReduxProvider>
                <HomePage />
            </ReduxProvider>,
        )

        const main = screen.getByRole('main')

        expect(main).toBeInTheDocument()
    })
})
