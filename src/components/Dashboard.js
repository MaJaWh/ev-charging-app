import React from 'react';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import AuthContext from '../utils/AuthContext';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);

  const handleClick = () => {
    Cookie.remove("token");
    setUser(null);
    navigate("/")
  };

  return (
    <>
    <nav className="header">
      <div className="header__username">
      username
    </div>
    <Link className="header__nav-link" to="/">
        Home
      </Link><div className="header__nav-link" onClick={handleClick}>
        Account
      </div><Link className="header__nav-link" to="/login">
        Login
      </Link>
      <button className="account__button" onClick={handleClick}>
          Logout
        </button>
    </nav>
    </>
  );
};

export default Dashboard;