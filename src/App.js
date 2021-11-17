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

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
                <Route exact path="/offers" element={<Offers />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
