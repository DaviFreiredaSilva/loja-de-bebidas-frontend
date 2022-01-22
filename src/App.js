import './App.css';
import {Routes, Route} from 'react-router-dom'
import NavbarComponent from "./components/NavbarComponent/NavbarComponent"
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import BeerPage from './pages/BeerPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <div>
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/products" element={<ProductsPage/>}/>
          <Route path="/beer" element={<BeerPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
