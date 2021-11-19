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
import Gourmet from './pages/Gourmet';
import Groceries from './pages/Groceries';
import Household from './pages/Household';
import PersonalCare from './pages/PersonalCare';
import PackagedFoods from './pages/PackagedFoods';
import Beverages from './pages/Beverages';
import Contact from './pages/Contact';

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
                <Route exact path="/faq" element={<FAQ />} />
                <Route exact path="/products" element={<Products />} />
                <Route exact path="/gourmet" element={<Gourmet />} />
                <Route exact path="/groceries" element={<Groceries />} />
                <Route exact path="/household" element={<Household />} />
                <Route exact path="/personalcare" element={<PersonalCare />} />
                <Route exact path="/packagedfoods" element={<PackagedFoods />} />
                <Route exact path="/beverages" element={<Beverages />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
