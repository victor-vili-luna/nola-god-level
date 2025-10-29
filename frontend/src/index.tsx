import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </Router>
  </React.StrictMode>
);
