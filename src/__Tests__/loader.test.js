import Loader from '../components/Loader';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Btn from '../components/Btn';

describe('renderiza el componente loader', () =>{
    test('primer div se renderiza', () =>{
        render(<Loader/>)
        const element = screen.getByTestId('custom-element')
    })
    test('primer div se renderiza', () =>{
        render(<Loader/>)
        const element = screen.getByTestId('custom-element2')
        })

})