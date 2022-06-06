import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticleHome from '../components/ArticleHome';
import { faBox, faShop } from '@fortawesome/free-solid-svg-icons'
import { MemoryRouter } from 'react-router-dom';


describe('Pagina home de dashboard', () => {
    test('renderiza title del producto', () => {
        render(<ArticleHome  titulo="Productos" url={'/products'} cantidad={99} icon={faBox} />,{wrapper: MemoryRouter})
        const title = screen.getByText('Productos')
        screen.debug()
        expect(title).toBeInTheDocument()
    })
    test('renderiza titulo del producto', () => {
        render(<ArticleHome  titulo="Tiendas" url={'/products'} cantidad={99} icon={faBox} />,{wrapper: MemoryRouter})
        const title = screen.getByText('Tiendas')
        screen.debug()
        expect(title).toBeInTheDocument()
    })

})