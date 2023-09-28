import { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  const [btnLoginText, setBtnLoginText] = useState('Login');
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://freesvg.org/img/organic_food.png"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="btn-login"
            onClick={() => {
              setBtnLoginText(btnLoginText === 'Login' ? 'Logout' : 'Login');
            }}
          >
            {btnLoginText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
