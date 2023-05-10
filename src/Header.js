import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [{cart, user}, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

  return (
    <div className='header'>
        <Link to="/">
        <img
        className='header-logo' 
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        </Link>

        <div
        className='header-search'>
            <input
            className='header-search-input'
            type='text'/>
            <SearchIcon
            className='header-search-icon'/>
        </div>

        <div
        className='header-nav'>
            <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className='header-option'>
                
                    <span className='header-option1'>
                        Hello {!user ? "Guest" : user?.email}
                    </span>
                    <span className='header-option2'>
                        {user ? "Sign out" : "Sign In"}
                    </span>
                
            </div>
            </Link>

            <div className='header-option'>
            <span className='header-option1'>
                    Returns
                </span>
                <span className='header-option2'>
                    & Orders
                </span>
            </div>
            <div className='header-option'>
            <span className='header-option1'>
                    Your
                </span>
                <span className='header-option2'>
                    Prime
                </span>
            </div>
            <Link to="/checkout"> 
            <div
            className='header-option-cart'>
                <ShoppingBasketIcon />
                <span className='header-basket-count'>
                    {cart?.length}
                </span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header