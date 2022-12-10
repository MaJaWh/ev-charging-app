import React from "react";
import fakeServer from "../utils/FakeServer";
import { useState } from "react";

function Login(props) {
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = ({ target: { value, id } }) => {
    setDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = fakeServer(details);
    if(res.error) {
      setError(res.error);
    } else {
      console.log("credentials are correct", '<-- login');
      setError(null)
    }
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
          <input id="username" onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input id="email" onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" onChange={handleChange} />
          <button className="login__form-button" type="submit">Login</button>
          {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Login;