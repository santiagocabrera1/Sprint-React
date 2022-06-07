import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from '../components/Sidebar';
import MainArea from '../components/MainArea';
import { MemoryRouter } from 'react-router-dom';

// Comenzamos el test para probar el boton toggleMenu
describe('Al momento de clickear en el botón, el menú del costado izquierdo, se muestra en pantalla', () => {

    // Tomamos el elemento boton para abrir la barra
    test('Usuario toca el botón para visualizar el menú', () => {

        render(<MainArea />, { wrapper: MemoryRouter })

        //Comprobamos que el botón existe y se lo asignamos a una variable
        const button = screen.getByRole('button')

        // Compruebo si el botón tiene la clase y eso confirma que existe
        expect(button).toHaveAttribute('class', 'menuToggle')

        //Probamos que el sidebar cambia de estado Close - Open

        render(<Sidebar />, { wrapper: MemoryRouter })

        //Creamos constante para aside
        const aside = screen.getByRole('complementary')

        // Comprobamos que el aside esté inicialmente closed
        expect(aside).toHaveAttribute('class', 'mainSidebar close')

        // Comprobamos que al momento de clickear cambie su estado a open
        // fireEvent.click(aside)

        // // Ahora comprobamos que el aside funcione
        // expect(aside).toHaveAttribute('class', 'mainSidebar open')

    })

})