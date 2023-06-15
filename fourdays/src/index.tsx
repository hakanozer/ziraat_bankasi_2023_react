import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// import pages
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Store';


const router =
<Provider store={store}>
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />} />
    </Routes>
  </BrowserRouter>
</Provider>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( router );