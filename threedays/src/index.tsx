import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// import pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


const router = 
<BrowserRouter>
  <ToastContainer />
  <Routes>
  <Route path='/' element={<Login />} />
  <Route path='/dashboard' element={<Dashboard/>} />
  </Routes>
</BrowserRouter>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( router );