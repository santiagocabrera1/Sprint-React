import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainArea from '../components/MainArea';
import { MemoryRouter } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';

describe('renderiza MainArea' , () =>{
    test('primer div se renderiza',() =>{
        render(<MainArea/>)
        const element = screen.getByTestId('custom-element3')
    })
    test ('icono se renderiza' , () => {
        render(<MainArea/>,)
            const button = screen.getByRole('button')
            expect(button).toBeInTheDocument()
          
    })
})