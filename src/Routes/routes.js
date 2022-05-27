import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home/Home';
import ProductsList from '../pages/Products/ProductsList/ProductsList'
import ProductView from '../pages/ProductView/ProductView'
import Profile from '../components/Profile';

const  MainRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<ProductsList/>}/>
                <Route path="/products/:id" element={<ProductView/>}/>
                <Route path="/profile" element={<Profile/>}/>
                {/* <Route path="/Productos/new" element={<Products/>}/> */}
                
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes;