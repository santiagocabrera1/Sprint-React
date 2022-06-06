import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import useFetch from "../../../hooks/useFetch";
import ProductList from './ProductsList'

// mock fetch
jest.mock("../../../hooks/useFetch");

test("uso del fetch", () => {
    const products = [{
        "title": "Producto prueba",
        "price": "2000",
        "stock": "20",
        "description": "descripcion",
        "id": 30
    }];

    useFetch.mockReturnValueOnce(products)
    render(<ProductList />);

    screen.debug();
})

