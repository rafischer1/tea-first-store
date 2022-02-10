import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/tea.svg';
import logo from '../../assets/tea.png';

const Header = () => (
  <div className='header'>
    <Link to='/'>
      <img src={logo} className='logo-container' />
    </Link>
    <div className='options'>
      <Link className='option' to='shop'>
        SHOP
      </Link>
      <Link className='option' to='cart'>
        CART
      </Link>
      <Link className='option' to='contact'>
        CONTACT
      </Link>
      <Link className='option' to='login'>
        LOGIN
      </Link>
    </div>
  </div>
);

export default Header;
