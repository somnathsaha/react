import { useState } from 'react';

const HeaderComponent = () => {
  const [btnLoginText, setBtnLoginText] = useState('Login');
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://freesvg.org/img/organic_food.png"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
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
