import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SideBar from '../components/Sidebar';
import { MemoryRouter } from 'react-router-dom';

describe(' SideBar' , () => {
    test('ButtonProducts', () => {
        //Renderizamos el componente que queremos testear
        //Usamos el MemoryRouter porque dentro de sidebar se encuentran los links de navbar
        render( <SideBar/>, { wrapper: MemoryRouter } )
        //Nos aseguramos de que el link de productos exista y lo pasamos a una variable
        const  button=screen.getByRole('link',{name:/productos/i})
        //Y en la priemra asercion buscamos que button nos lleve a /products
        expect(button).toHaveAttribute('href','/products')
        //Y en la segunda asercion buscamos que button matchee con productos (que es el nombre del boton)
        expect(button.innerHTML).toMatch('Productos')
    })

    test('ButtonTienda', () =>{
        //Renderizamos el componente que queremos testear
        //Usamos el MemoryRouter porque dentro de sidebar se encuentran los links de navbar
        render( <SideBar/>, { wrapper: MemoryRouter } )
        //Nos aseguramos de que el link de productos exista y lo pasamos a una variable
        const  button=screen.getByRole('link',{name:/tienda/i})
        //Y en la priemra asercion buscamos que button nos lleve a /products
        expect(button).toHaveAttribute('href','/store')
        //Y en la segunda asercion buscamos que button matchee con productos (que es el nombre del boton)
        expect(button.innerHTML).toMatch('Productos')
    })

})


