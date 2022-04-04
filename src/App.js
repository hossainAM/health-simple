import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import ReviewItem from './components/ReviewItem/ReviewItem';
import Navbar from './components/Navbar/Navbar';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/review' element={<ReviewItem/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
};

export default App;