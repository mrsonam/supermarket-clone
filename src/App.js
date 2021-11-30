// import { useState, useEffect } from 'react';
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

function App() {
    return (
        <Router>
            <ScrollToTop id="toTop" showUnder={160}>
                <img src={arrow} alt="" />
            </ScrollToTop>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/offers" element={<Offers />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/faq" element={<FAQ />} />
                <Route exact path="/products" element={<Products />} />
                <Route exact path="/pizza" element={<Pizza />} />
                <Route exact path="/momo" element={<Momo />} />
                <Route exact path="/noodles" element={<Noodles />} />
                <Route exact path="/chilli" element={<Chilli />} />
                <Route
                    exact
                    path="/sandwich"
                    element={<Sandwich />}
                />
                <Route exact path="/healthy%20choice" element={<HealthyChoice />} />
                <Route exact path="/rice" element={<Rice />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
