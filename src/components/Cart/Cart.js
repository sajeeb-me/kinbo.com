import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Cart = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>Hello: {user?.displayName}</h1>
            <h1>Your Email: {user?.email}</h1>
            <p>Cart is getting ready...!</p>
        </div>
    );
};

export default Cart;