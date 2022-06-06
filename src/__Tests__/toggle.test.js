import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from '../components/Sidebar';
import MainArea from '../components/MainArea';
import { MemoryRouter } from 'react-router-dom';

// Comenzamos el test para probar el boton toggleMenu
describe('Al momento de clickear, toggle se desliza', () => {

    // Tomamos el elemento boton para abrir la barra
    test('Usuario toca la barra que contiene el toggle', () => {
        render(<MainArea />, { wrapper: MemoryRouter } )

        //Comprobamos que el botón existe y se lo asignamos a una variable
        const button = screen.getByRole('button') 

        // Compruebo si el botón tiene la clase y eso confirma que existe
        expect(button).toHaveAttribute('class', 'menuToggle')
    })

    //Probamos que el sidebar cambia de estado Close - Open

    test('El sidebar se desliza en la pantalla', () => {
        render(<Sidebar />, { wrapper: MemoryRouter } )

        //Comprobamos que el botón existe y se lo asignamos a una variable
        const button = screen.getByRole('button') 

        // Compruebo si el botón tiene la clase y eso confirma que existe
        expect(button).toHaveAttribute('class', 'menuToggle')

        //Creamos constante para aside
        const aside = screen.getByRole('complementary') 

        // Comprobamos que el aside esté inicialmente closed
        expect(aside).toHaveAttribute('class', 'mainSidebar close')

        // Comprobamos que al momento de clickear cambie su estado a open
        fireEvent.click(button)
        
        // Ahora comprobamos que el aside funcione
        expect(aside).toHaveAttribute('class', 'mainSidebar open')
        
    })


})