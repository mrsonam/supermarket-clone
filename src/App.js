// import './App.css';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
