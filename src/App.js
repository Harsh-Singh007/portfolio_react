import logo from './logo.svg';
import './App.css';
import { Header } from './Component/Header';
import { Home } from './Component/Home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Component/About';
import { Services } from './Component/Services';
import { Project } from './Component/Project';
import { Contact } from './Component/Contact';
import { Footer } from './Component/Footer';
import { Error } from './Component/Error';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Home/> */}
      <Router>
        <Header/>
        
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Error/>} />
        </Routes>
        <Footer/>
        </Router>
      </div>
  );
}

export default App;
