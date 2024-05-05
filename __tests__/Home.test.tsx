import { render, screen } from '@testing-library/react'
import ReduxProvider from '@/lib/providers/ReduxProvider'
import HomePage from '../src/app/page'

describe('Page', () => {
    it('renders a main element', async () => {
        render(
            <ReduxProvider>
                <HomePage />,
            </ReduxProvider>,
        )

        const main = await screen.findByRole('main')
        expect(main).toBeInTheDocument()
    })
})
