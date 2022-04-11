import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth)
    }

    return (
        <header>
            <nav className='flex justify-center gap-5 py-3 text-white'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/products'>Products</CustomLink>
                <CustomLink to='/cart'>Cart</CustomLink>
                {
                    user ?
                        <button onClick={handleLogout} style={{ color: '#14f7ff' }}>Logout ({user?.displayName})</button>
                        :
                        <CustomLink to='/login'>Login</CustomLink>
                }
            </nav>
        </header>
    );
};

export default Header;