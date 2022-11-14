import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
//import { Container } from 'react-bootstrap';
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Success from './pages/Success';
import About from "./pages/About";
import Admin from "./pages/Admin";
import CartProvider from './CartContext';
import Navbar1 from "./components/NavBar1"; 
import Footer from "./components/Footer";
import { Account} from "./pages/Account";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ForgotPassword } from "./pages/ForgotPassword";
import FrequentQuestions from "./pages/FrequentQuestions";
import { Sidebar } from "./pages/Sidebar";
// localhost:3000 -> Home
// localhost:3000/success -> Success

function App() {
  return (
    
    <CartProvider>
      <Navbar1/>
      
      <div className='Container1'>
      
        <NavbarComponent></NavbarComponent>
        
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="/Home" element={<Home />} />
            <Route path="Store" element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/FrequentQuestions" element={<FrequentQuestions/>} />
          </Routes>
        </BrowserRouter>
        
        
      </div>
      <Footer/>
    </CartProvider>
  );
}

export default App;
