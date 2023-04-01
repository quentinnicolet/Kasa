import '../styles/App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Emplacement from './pages/Emplacement';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Header from './Header';
import Footer from './Footer';
// Définition des routes avec Browser Router de l'application
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Emplacement />} />
          <Route path="/error" element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;