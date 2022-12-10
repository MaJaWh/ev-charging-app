import React from 'react';
import ContainerLogin from '../containers/ContainerLogin';
import Dashboard from './Dashboard';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ContainerLogin" element={<ContainerLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
