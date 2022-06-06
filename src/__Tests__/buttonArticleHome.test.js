import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import ArticleHome from '../components/ArticleHome'
import { faBox, faShop } from '@fortawesome/free-solid-svg-icons'

describe('Componente article que se ve en la home del sitio', () => {
  test('contiene un button-link que me lleva a la lista de productos', () => {
    render(<ArticleHome title="Productos" url="products" cantidad={10} icon={faShop} />, {
      wrapper: MemoryRouter,
    })
    const link = screen.getByRole('link', { name: /ver listado/i })
    expect(link).toHaveAttribute('href', '/products')
  })

  test('contiene un button-link que me permite agregar un nuevo producto', () => {
    render(<ArticleHome title="Productos" url="products" cantidad={10} icon={faBox} />, {
      wrapper: MemoryRouter,
    })
    const link = screen.getByRole('link', { name: /agregar/i })
    expect(link).toHaveAttribute('href', '/products/new')
  })
})
