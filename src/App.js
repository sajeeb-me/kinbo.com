import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Body from './components/Body/Body';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import Register from './components/Register/Register';

function App() {
  const location = useLocation()
  console.log(location.pathname !== '/')
  return (
    <div className="App">
      {
        location.pathname !== '/' &&
        < Header ></Header>
      }
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div >
  );
}

export default App;
