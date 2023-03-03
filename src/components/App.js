import '../styles/App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import NotFound from './pages/404';
import Home from './pages/Home';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;