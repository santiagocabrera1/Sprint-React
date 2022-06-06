import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import FormProducts from '../components/FormProducts'
import { MemoryRouter } from 'react-router-dom';


describe("Formulario de productos", () => {

    beforeEach(() => { render(<FormProducts type="create" />, { wrapper: MemoryRouter }) })

    test('Se renderiza', () => {
        render(<FormProducts type="create" />, { wrapper: MemoryRouter });
    });

    test('Titulo', () => {
        // Obtengo el Nodo de Input con name title
        const input = screen.getByLabelText(/Titulo/i);

        //asigno el evento al input
        userEvent.click(input);
        //Agrego contenido al input
        userEvent.keyboard('Alfajor');
        // Busca que alfajor este en el documento
        expect(screen.getByDisplayValue('Alfajor')).toBeInTheDocument();
    });

    test('Precio', () => {
        // Obtengo el Nodo de Input con name title
        const input = screen.getByLabelText(/Precio/i);

        //asigno el evento al input
        userEvent.click(input);
        //Agrego contenido al input
        userEvent.keyboard('1234444');
        // Busca que alfajor este en el documento
        expect(screen.getByDisplayValue('1234444')).toBeInTheDocument();
    });

    test('Stock', () => {
        // Obtengo el Nodo de Input con name title
        const input = screen.getByLabelText(/Stock/i);

        //asigno el evento al input
        userEvent.click(input);
        //Agrego contenido al input
        userEvent.keyboard('12345');
        // Busca que alfajor este en el documento
        expect(screen.getByDisplayValue('12345')).toBeInTheDocument();
    });

    test('Stock', () => {
        // Obtengo el Nodo de Input con name title
        const input = screen.getByLabelText(/Descripción/i);

        //asigno el evento al input
        userEvent.click(input);
        //Agrego contenido al input

        userEvent.keyboard('Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aut numquam repellendus veniam eos perspiciatis tempora nobis asperiores soluta, mollitia, quaerat esse at facere animi! Provident eveniet natus non iste.');
        // Busca que alfajor este en el documento
        expect(screen.getByDisplayValue('Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aut numquam repellendus veniam eos perspiciatis tempora nobis asperiores soluta, mollitia, quaerat esse at facere animi! Provident eveniet natus non iste.')).toBeInTheDocument();
    });

    test('Nueva Imagen', () => {
        // Obtengo el Nodo de Input con name title
        const input = screen.getByLabelText(/Nueva Imagen/i);

        //asigno el evento al input
        userEvent.click(input);
        //Agrego contenido al input

        userEvent.keyboard("http://imagen.com");
        // Busca que alfajor este en el documento
        expect(screen.getByDisplayValue("http://imagen.com")).toBeInTheDocument();
    });
})
