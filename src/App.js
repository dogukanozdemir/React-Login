import React, { useState } from 'react';
import './App.css';
import TextBox from './components/Textbox';
import { FaRegUser } from 'react-icons/fa';
import { BiLockAlt } from 'react-icons/bi';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isIncorrectPassword, setIncorrectPassword] = useState(false);
  const [isSuccessfulLogin, setSuccessfulLogin] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'test@luxpmsoft.com' && password === 'test1234!') {
      setSuccessfulLogin(true);
    } else {
      setIncorrectPassword(true);
    }
  };

  return (
    <div className="app-container">
      <div className="background">
        <div className="background-vector"></div>
        <div className="background-ellipse big"></div>
        <div className="background-ellipse medium"></div>
        <div className="background-ellipse small"></div>
      </div>
      <div className="content">
        <div className="image-container">
          <div className="image"></div>
        </div>
        <form className="form-container" onSubmit={handleLogin}>
          <div className="text-fields">
            <TextBox
              icon={<FaRegUser />}
              placeholder="USERNAME"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="username"
            />
            <TextBox
              icon={<BiLockAlt />}
              placeholder="PASSWORD"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password"
              title="Wrong combination"
              required
              pattern="^[a-zA-Z0-9@#$%^&+=*!]*$"
            />
          </div>
          <div className="button-container">
            <button type="submit" className="btn-rectangle">
              <span className="button">Login</span>
            </button>
            <div className="forgot-password">
              <a href="/" className="forgot-password-text">
                Forgot Password?
              </a>
            </div>
          </div>
        </form>
      </div>
      {isIncorrectPassword && (
        <div className="modal">
          <div className="modal-content">
            <h2>Wrong Password</h2>
            <p>The provided password is wrong</p>
            <button onClick={() => setIncorrectPassword(false)}>Close</button>
          </div>
        </div>
      )}
      {isSuccessfulLogin && (
        <div className="modal">
          <div className="modal-content">
            <h2>Successful Login</h2>
            <p>You have successfully logged in.</p>
            <button onClick={() => setSuccessfulLogin(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
