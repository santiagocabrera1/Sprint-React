import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from '../components/Sidebar';
import MainArea from '../components/MainArea';
import { MemoryRouter } from 'react-router-dom';

// Comenzamos el test para probar el boton toggleMenu
describe('Al momento de clickear, toggle se desliza', () => {

    // Tomamos el elemento boton para abrir la barra (aside?)
    test('usuario toca la barra que contiene el toggle', () => {
        render(<MainArea />, { wrapper: MemoryRouter } )

        //Comprobamos que el botón existe y se lo asignamos a una variable
        const button = screen.getByRole('button') 

        // Compruebo si el botón tiene la clase/atributo
        expect(button).toHaveAttribute('class', 'menuToggle')
    })

    //Probamos que el sidebar cambia de estado Close - Open

    // test('El sidebar se desliza en la pantalla', () => {
    //     render(<Sidebar />, { wrapper: MemoryRouter } )

    //     // Creamos la variable para el aside
    //     const aside = screen.getByRole('complementary') //No estoy seugra que pasarle

    //     console.log(aside)

    //     // Comprobamos que esté incialmente closed
    //     expect(aside).toHaveAttribute('close')

    //     // Comprobamos que al momento de clickear cambie su estado a open
    // })


})