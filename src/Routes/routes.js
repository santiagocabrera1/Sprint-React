import {BrowserRouter, Routes, Route} from 'react-router-dom';


const  mainRoute = () => {
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/products" element={<ProductsList/>}/>
       <Route path="/Products/:id" element={<ProductView/>}/>
       <Route path="/Productos/new" element={<Products/>}/>
    </Routes>

    </BrowserRouter>

}

export default mainRoute;