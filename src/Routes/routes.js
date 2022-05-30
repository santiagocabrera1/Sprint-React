import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'
import NewProduct from '../pages/Products/New/NewProduct';
import ProductsList from '../pages/Products/ProductsList/ProductsList'
import ProductView from '../pages/ProductView/ProductView'
import Profile from '../components/Profile';
import { BrowserRouter } from 'react-router-dom';
const  MainRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<ProductsList/>}/>
                <Route path="/products/:id" element={<ProductView/>}/>
                <Route path="/profile" element={<Profile/>}/>
                {/* <Route path="/Productos/new" element={<Products/>}/> */}
                <Route path="/products/new" element={<NewProduct/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes
