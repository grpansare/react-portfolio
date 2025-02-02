import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './Comonents/Navbar';
import Hero from './Comonents/Hero';
import About from './Comonents/About';
import Projects from './Comonents/Projects';
import Contact from './Comonents/Contact';





const App = () => {
  return (
    <>
<Navbar/>
<Hero  />
<About  />
<Projects/>
<Contact/>
  
    </>
    
  )
}

export default App