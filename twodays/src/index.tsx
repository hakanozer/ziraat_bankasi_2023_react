import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// import pages
import App from './pages/App';
import Settings from './pages/Settings';
import Control from './utils/Control';
import Login from './pages/Login';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

const router = 
<BrowserRouter>
  <Routes>
  <Route path='/' element={<Login />} />  
  <Route path='/dashboard' element={ <Control component={<App/>} /> } />
  <Route path='/settings' element={ <Control component={<Settings/>} /> } />
  <Route path='/detail/:id' element={ <Control component={<Detail/>} /> } />
  <Route path='*' element={<NotFound/>}></Route>
  </Routes>
</BrowserRouter>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( router );