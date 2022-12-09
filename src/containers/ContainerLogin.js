// import React from 'react';

// function Login() {
//   return <div>Login</div>;
// }

// export default Login;
import React, { useState } from "react";
import Login from "../components/Login";

const containerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <form size="lg" controlId="email">
          <form>Email</form>
          <form
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
        <form size="lg" controlId="password">
          <form>Password</form>
          <form
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </button>
      </form>
    </div>
  );
};

export default containerLogin;
