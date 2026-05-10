import React from 'react';
import './Login.css';

const Login = (props) => {
  return (
    <div className="login-container">
      <h3>Sultanpur Tech Login</h3>
      <form onSubmit={(e) => { e.preventDefault(); props.onLogin(); }}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;