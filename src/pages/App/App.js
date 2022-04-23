import './App.css';
import { useState } from 'react';
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import { Routes, Route } from 'react-router-dom'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

export default function App() {
  const [user, setUser] = useState(null)


  return (
    <main className="App">
      {
        user ? 
      <Routes> 
        <Route path="/orders/new" element={<NewOrderPage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
      </Routes>
       : 
      <AuthPage />
      }
    </main>
  );
}
