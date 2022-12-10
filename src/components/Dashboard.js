import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (false) {
      navigate("/account");
    } else {
      navigate("/login");
    }
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
    </nav>
    </>
  );
};

export default Dashboard;