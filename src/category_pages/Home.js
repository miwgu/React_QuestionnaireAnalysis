import React from 'react';

function Home() {
  return (
  <div className='home' style={{ 
    backgroundImage: `linear-gradient(45deg, #F2F2F4, #CECEE2)` 
  }} >
   <div class='box'>
        <div class='wave -one'></div>
        <div class='wave -two'></div>
        <div class='wave -three'></div>
      <h1 className='home-text'>Analys för hälsoundersökningar</h1>
    </div>
  </div>
  )
}

export default Home;
