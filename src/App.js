import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Products from './pages/Products';
import Pizza from './pages/Pizza';
import Contact from './pages/Contact';
import ScrollToTop from 'react-scroll-up';
import arrow from "./images/arrow.png"
import Momo from './pages/Momo';
import Noodles from './pages/Noodles';
import Chilli from './pages/Chilli';
import Sandwich from './pages/Sandwich';
import HealthyChoice from './pages/HealthyChoice';
import Rice from './pages/Rice';
import Profile from './pages/Profile';
import MyCart from './pages/MyCart';
import ForgotPassword from './pages/ForgotPassword';

function App() {
    return (
        <Router>
            <ScrollToTop id="toTop" showUnder={160}>
                <img src={arrow} alt="" />
            </ScrollToTop>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/products" element={<Products />} />
                <Route path="/pizza" element={<Pizza />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/momo" element={<Momo />} />
                <Route path="/noodles" element={<Noodles />} />
                <Route path="/chilli" element={<Chilli />} />
                <Route
                    exact
                    path="/sandwich"
                    element={<Sandwich />}
                />
                <Route path="/healthy%20choice" element={<HealthyChoice />} />
                <Route path="/rice" element={<Rice />} />
                <Route path="/checkout" element={<MyCart />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
