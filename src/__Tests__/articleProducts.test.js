import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import ArticleProducts from '../components/ArticleProducts'

describe('Tarjeta de producto con link a detalle', () => {
  test('contiene un link a la pagina de detalle', () => {
    render(<ArticleProducts title="Alfajores" id={999} img="https://www.fillmurray.com/g/200/200" />, {
      wrapper: MemoryRouter,
    })
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/products/999')
  })

  test('contiene un title del producto', () => {
    render(<ArticleProducts title="Alfajores" id={999} img="https://www.fillmurray.com/g/200/200" />, {
      wrapper: MemoryRouter,
    })
    const title = screen.getByText('Alfajores')
    expect(title).toBeInTheDocument()
  })

  test('contiene una imagen con src y alt del producto', () => {
    render(<ArticleProducts title="Alfajores" id={999} img="https://www.fillmurray.com/g/200/200" />, {
      wrapper: MemoryRouter,
    })
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', 'https://www.fillmurray.com/g/200/200')
  })

  test('contiene el id del producto', () => {
    render(<ArticleProducts title="Alfajores" id={999} img="https://www.fillmurray.com/g/200/200" />, {
      wrapper: MemoryRouter,
    })
    const id = screen.getByText('#999')
    expect(id).toBeInTheDocument()
  })
})
