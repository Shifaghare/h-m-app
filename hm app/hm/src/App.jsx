import './App.css'
import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import Header from './components/Header';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
       <div className="App">
      <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='/fp' element={<FeaturedProducts/>} />
        <Route path='/f' element={<Footer/>} />
        </Routes>
    
    </div>
  </div>
  )
}

export default App;