import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img className='header__logo' src="./logo.png" alt='logo'/>
      <div className='header_search'>
        <input
        className='header__searchinput'
        type='text'
        />
        <div className='header__nav'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello</span>
            <span className='header__optionLineTwo'>Sign in</span>
           </div>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
           </div>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Favorites</span>
           </div>

        </div>

      </div>

    </div>
  )
}

export default Header