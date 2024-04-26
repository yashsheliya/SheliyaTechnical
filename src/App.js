import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Components/Home';
import Service from './Components/Service';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/HeaderAndFooter/Header';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './Components/HeaderAndFooter/Footer';


function App() {
  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home pageName="Home" />} />
          <Route path="/about" element={<About pageName="About" />} />
          <Route path="/contact" element={<Contact pageName="Contact" />} />
          <Route path="/service" element={<Service pageName="Service" />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
