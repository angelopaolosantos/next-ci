// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /learn/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders without crashing', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { name: /Docs/i })
    ).toBeInTheDocument()
  })

  it('Check for Getting Started Text', () => {
    const { getByText } = render(<Home />)
    expect(getByText('Get started by editing')).toBeInTheDocument()
  })
})
