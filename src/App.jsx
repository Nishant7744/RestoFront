import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Home from './Pages/Home';
import Success from './Pages/Success';
import PageNotFound from './Pages/PageNotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/success' element={<Success/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App
