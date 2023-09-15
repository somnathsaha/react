import React from 'react';
import ReactDOM from 'react-dom';

const AppComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className='logo' src="https://freesvg.org/img/organic_food.png"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponent />);
