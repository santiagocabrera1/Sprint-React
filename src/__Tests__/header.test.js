import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../components/Header'

describe('Header de las paginas del sitio, que muestra un titulo y puede tener children', () => {
  test('se puede pasar un titulo al Header', () => {
    render(<Header title="Productos" />)

    const title = screen.getByText('Productos')
    expect(title).toBeInTheDocument()
  })

  test('se puede pasar children al Header', () => {
    render(
      <Header title="Productos">
        <button>Eliminar Producto</button>
      </Header>
    )
    const button = screen.getByRole('button', { name: /eliminar producto/i })
    expect(button).toBeInTheDocument()
  })
})
