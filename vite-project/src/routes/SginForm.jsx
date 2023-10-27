import React, { useState } from 'react';
import "./SignForm.css"
const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform sign in logic
    // ...

    // Reset input values
    setEmail('');
    setPassword('');
  };

  return (
    <div className="form-container">
      <div className="form-frame">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary">Connexion</button>
          <br /><br />
          <button type="submit" className="btn btn-primary">s'incrire</button>

        </form>
      </div>
    </div>
  );
};

export default SignInForm;