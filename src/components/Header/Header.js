import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <header>
            <nav className='flex justify-center gap-5 py-3 text-white'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/products'>Products</CustomLink>
                <CustomLink to='/cart'>Cart</CustomLink>
                <CustomLink to='/login'>Login</CustomLink>
            </nav>
        </header>
    );
};

export default Header;