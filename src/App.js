import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import NavbarComponent from "./components/NavbarComponent/NavbarComponent"
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import BeerPage from './pages/BeerPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';

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
        </Routes>
      </div>
    </div>
  );
}

export default App;
