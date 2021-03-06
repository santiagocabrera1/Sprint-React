import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile'
import NewProduct from '../pages/Products/New/NewProduct'
import ProductsList from '../pages/Products/ProductsList/ProductsList'
import ProductView from '../pages/ProductView/ProductView'
import Store from '../pages/Home/Store/Store'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/products/:id" element={<ProductView />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/store" element={<Store />} />
      <Route path="/products/new" element={<NewProduct />} />
      <Route path="*" element={<Store />} />
    </Routes>
  )
}

export default MainRoutes
