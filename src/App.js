import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './category_pages/Home';
import Psoriasis_1 from './category_pages/Psoriasis_1';
import Cancer_2 from './category_pages/Cancer_2';


function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/psoriasis' element={<Psoriasis_1/>}/>
       <Route path='/cancer' element={<Cancer_2/>}/>
     </Routes>
    </Router>
    </>
  );
}

export default App;
