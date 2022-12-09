// import '../styles/app.css';
// import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
// import { useState } from 'react';
// import AuthContext from '../utils/AuthContext';
// import Home from './Home';
// import Account from './Account';
// import Login from './Login';

// function App() {
//   const [user, setUser] = useState(null);
//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       <div className="app">
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/account"
//               element={user ? <Account /> : <Navigate to="/login" replace />}
//             />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </AuthContext.Provider>
//   );
// }

// export default App;

import React from 'react';
import ContainerLogin from "../containers/ContainerLogin";
import Account from "../components/Account";
import Dashboard from './Dashboard';
import Header from "./Header";
import Home from "./Home";
import LoggedInPage from "./LoggedInPage"
import Login from "./Login";
import Preferences from "./Preferences";
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';

function App() {
  return <div>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={''} />
        <Route path="/" element={''} />
        <Route path="/" element={''} />
        <Route path="/" element={''} />
      </Routes>
    </Router>
    </div>
}

export default App;
