import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home/Home';
import ProductsList from '../pages/Products/ProductsList/ProductsList'
import ProductView from '../pages/ProductView/ProductView'
import NewProduct from '../pages/Products/New/NewProduct';
const  MainRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<ProductsList/>}/>
                <Route path="/products/:id" element={<ProductView/>}/>
                <Route path="/products/new" element={<NewProduct/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes;