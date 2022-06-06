import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from '../components/Sidebar'


// Comenzamos el test para probar toggleMenu
describe('Al momento de utilizar de clickear, toggle se desliza', () => {

    test('usuario toca la barra que contiene el toggle' () => {
        render(<aside className={`mainSidebar ${isOpen ? 'open' : 'close'}`}>)
    })




});