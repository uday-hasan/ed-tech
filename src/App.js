import { Routes, Route } from 'react-router-dom';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar'
import Services from './pages/Services/Services';
import Login from './pages/Login/Login/Login';
import Signup from './pages/Login/Singup/Signup';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import ServiceDetails from './pages/Services/ServiceDetails';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:id' element={
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
