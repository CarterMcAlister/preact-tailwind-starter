import { render, screen } from '@testing-library/preact'
import { h } from 'preact'
import Header from '../src/components/header'

describe('Initial Test of the Header', () => {
  it('Renders 3 nav items', () => {
    render(<Header />)
    expect(screen.getByText(/Preact App/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link').length).toBe(3)
  })
})
