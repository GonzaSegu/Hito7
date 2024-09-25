import { Navigate, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './views/Home';
import Footer from './components/Footer';
import Register from './views/Register';
import Login from './views/Login';
import Cart from './views/Cart';
import Pizza from './views/Pizza';
import Profile from './components/Profile';
import NotFound from './views/NotFound';
import { useContext } from 'react';
import { GlobalContext } from './contexts/GlobalContext';

function App() {
  const { authEmail } = useContext(GlobalContext);
  const token = authEmail.token

  return (
    <>
      <div className="fix-top">
        <NavBar/>
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={!token? <Login /> : <Navigate to="/" />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pizza/:id' element={<Pizza /> } />
            <Route path='/profile' element={token ? <Profile /> : <Navigate to="/login" />} />
            <Route path="*" element={<NotFound/>}/>      
            {/*<Route path='/profile' element={Profile/>}/> */}
          </Routes>
      </div>
      <Footer/>
      </div>
    </>
  );
}

export default App;

