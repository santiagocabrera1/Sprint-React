import {BrowserRouter, Routes, Route} from 'react-router-dom';


const  mainRoute = () => {
    <BrowserRouter>
    <Route>
       <Route path="/" element={<Home/>}/>
       <Route path="Products" element={<ProductsList/>}/>
       <Route path="/Products/:id" element={<ProductView/>}/>
       <Route path="/Productos/new" element={<Products/>}/>
    </Route>

    </BrowserRouter>

}

export default mainRoute;