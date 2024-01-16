import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Program from './components/Program/Program';
// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Nav'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './components/Header/Header';
import WebFont from "webfontloader"
import React from 'react';




function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Groid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <div className="App">

      <Router>
        <Header />
      </Router>
      <Hero />
      <Footer />

    </div>
  );
}

export default App;
