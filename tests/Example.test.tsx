import React from 'react'
import { render, screen } from '@testing-library/react'
import ExampleComponent from '../src'

describe('MyComponent', () => {
    it('renders the text prop', () => {
        render(<ExampleComponent />)
        expect(screen.getByText('Hello, test!')).toBeInTheDocument()
    })

    it('has the correct CSS class', () => {
        render(<ExampleComponent />)
        const element = screen.getByText('Test class')
        expect(element).toHaveClass('my-component')
    })

    it('renders without crashing', () => {
        expect(() => render(<ExampleComponent />)).not.toThrow()
    })

    it('renders empty string when no text is provided', () => {
        render(<ExampleComponent />)
        const element = screen.getByText('')
        expect(element).toBeInTheDocument()
    })
})
