import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Switch from '../components/Switch'

const handleChange = jest.fn()

describe('componente de switch', () => {
  test('recibe su estado de checked via props', () => {
    render(<Switch isChecked={false} setIsChecked={handleChange} />)

    const checkbox = screen.getByRole('checkbox')

    expect(checkbox.checked).toEqual(false)
  })

  test('llama a una funcion pasada por props cuando es clickeado', () => {
    render(<Switch isChecked={false} setIsChecked={handleChange} />)

    const checkbox = screen.getByRole('checkbox')

    fireEvent.click(checkbox)

    // espero que handleChange se haya llamado una vez
    expect(handleChange).toHaveBeenCalledTimes(1)
    // espero que handleChange se haya llamado con un parametro que es el contrario del valor inicial
    expect(handleChange).toHaveBeenCalledWith(true)
  })
})
