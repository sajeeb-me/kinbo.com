import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css'

const Body = () => {
    return (
        <div className='body'>
            <Link to='/products'><p className='neon'>Kinbo<small>.com</small></p></Link>
        </div >
    );
};

export default Body;