import { render, screen } from '@testing-library/react'
import HomePage from '../src/app/page'
import ReduxProvider from '@/lib/providers/ReduxProvider'

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
