import React from "react";

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import About from './components/About';



import { BrowserRouter as Router, Routes  , Route} from 'react-router-dom';
import About_one from "./components/About_one";
import Faq from "./components/Faq";
import Register from "./components/Register";
import Login from "./components/Login";




function App() {
  return (
  <>
    <Router>
      <Header/>
      
    {/* <Navigation/>    */}
  
    
      <Routes>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/about_one" element={<About_one />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/contact" component={Contact} /> */}
        {/* Add more routes for additional pages */}
      </Routes>
      <Footer/>
      
      </Router>
    </>
  );
}

export default App;

