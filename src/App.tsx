import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './Global.scss'

import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Main from './pages/Main';
import Board from './pages/Board';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <div id='wrap'>
      <BrowserRouter>
        <Header />
        <main className="content">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Main' element={<Main />}/>
            <Route path='/Board' element={<Board />}/>
            <Route path='/Contact' element={<Contact />}/>
          </Routes> 
        </main>
      </BrowserRouter> 
      <Footer/>
    </div>
  );
}

export default App;
