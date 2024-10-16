import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import Dashboard from './Dashboard';
import Job from './Job';
import Registration from './Registration';
import Work from './Work';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/jobs" element={<Job />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
