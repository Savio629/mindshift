import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home.jsx';
import Cards from './pages/Cards.js';
import Analytics from './pages/Analytics.jsx';
import Community from './pages/Community.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Calendar from './pages/Calendar.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/community" element={<Community />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;