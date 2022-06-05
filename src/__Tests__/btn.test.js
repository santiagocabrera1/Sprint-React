import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Btn from '../components/Btn'
import { MemoryRouter } from 'react-router-dom'

// describe es para describir un conjunto de tests
describe('Btn: Componente de Link con forma de Pill', () => {
  // cada test tiene una descripcion de lo que se va a testear
  // cada test tiene que ser lo mas pequeño y puntual posible
  test('renderiza un Link con una URL que se pasa por props', () => {
    // renderiza un component, al usar un Link es necesario que este dentro de un MemoryRouter
    render(<Btn to="/products">Products</Btn>, { wrapper: MemoryRouter })

    // buscar elemento por role link (hay uno solo en Btn)
    const btn = screen.getByRole('link')
    // espero que btn tenga un atributo href que sea igual al que pase por props como 'to'
    expect(btn).toHaveAttribute('href', '/products')
  })

  test('renderiza un Link con una contenido que se pasa por children', () => {
    render(<Btn to="/products">Products</Btn>, { wrapper: MemoryRouter })

    const btn = screen.getByRole('link')

    // espero que al renderizar btn matchee el snapshot que saco jest
    // un snapshot es una "foto" de un momento determinado, estan en __snapshoots__
    expect(btn).toMatchSnapshot()
  })
})
