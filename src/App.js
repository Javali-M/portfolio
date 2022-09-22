import React from 'react';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Resume from './routes/Resume';
import {Route,Routes} from 'react-router-dom';
const App = () => {
  return (
    <>
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/resume' element={<Resume/>}/>
        </Routes>
    </>
    
  );
}

export default App