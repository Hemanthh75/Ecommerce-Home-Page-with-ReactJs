import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';

const App = () => {
  return(
    <div>
       <Router>
         <Routes>
           <Route exact path="/" element={<Home />}></Route>   {/* Giving routing functionality to the page */}
         </Routes>
       </Router>
    </div>
  )
}

export default App;