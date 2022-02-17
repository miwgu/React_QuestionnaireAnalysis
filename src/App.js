import React from 'react';
import './App.css';
import Navbar from './components/nav/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './category_pages/Home';
import Psoriasis_1 from './category_pages/Psoriasis_1';
import Cancer_2 from './category_pages/Cancer_2';
import Diabetes_3 from './category_pages/Diabetes_3';
import Message from './category_pages/Message';
import Help from './category_pages/Help';


function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/psoriasis' element={<Psoriasis_1/>}/>
       <Route path='/cancer' element={<Cancer_2/>}/>
       <Route path='/diabetes' element={<Diabetes_3/>}/>
       <Route path='/message' element={<Message/>}/>
       <Route path='/help' element={<Help/>}/>
     </Routes>
    </Router>
    </>
  );
}

export default App;
