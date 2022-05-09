import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './store'
import { Provider } from 'react-redux'
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page2 from './Components/Page2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <Provider store={store}>
    <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/page-2" element={<Page2 />} />
    </Routes>
  </BrowserRouter>
    </React.StrictMode>
  </Provider>
);


