import React from 'react';
import Dashboard from './Dashboard';
import Login from "./Login";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
