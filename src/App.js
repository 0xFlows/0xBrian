import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
/*
import Projects from './components/Projects';
import About from './components/About';
import Perspectives from './components/Perspectives';
import Contact from './components/Contact'; */
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects"/>
          <Route path="/about"/>
          <Route path="/perspectives"/>
          <Route path="/contact"/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
