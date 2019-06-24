import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <nav>
            <img src='/favicon.ico' />
            <ul className='nav-link'>
                <Link className='link-style' to='/'>
                <li>Home</li>
                </Link>
                <Link className='link-style' to='/product'>
                <li>Products</li>
                </Link>
                <Link className='link-style' to='/detail'>
                <li>Detail</li>
                </Link>
                <Link className='link-style' to='/counter'>
                <li>Counter</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;