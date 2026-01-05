import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CheckOutPage } from './pages/CheckOutPage';
import { OrdersPage } from './pages/OrdersPage';

import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckOutPage />}></Route>
      <Route path="orders" element={<OrdersPage />}></Route>
      
    </Routes>
  )
}

export default App
