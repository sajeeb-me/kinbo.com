import React from 'react';
import './Register.css'
import { MailIcon, UserCircleIcon, KeyIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import GoogleIcon from '../../icons/google.png'
import FacebookIcon from '../../icons/facebook.png'
import TwitterIcon from '../../icons/twitter.png'

const Register = () => {
    return (
        <div>
            <section className='p-10'>
                <h1 className='text-2xl mb-5'>Register here</h1>
                <div className='form-container w-full md:w-1/2 m-auto rounded-xl p-10'>
                    <form className='form'>
                        <div className='flex justify-center items-center gap-2 my-5'>
                            <UserCircleIcon className="h-7 w-7" />
                            <input type="text" name="name" id="name" placeholder='Full Name' required />
                        </div>
                        <div className='flex justify-center items-center gap-2 my-10'>
                            <MailIcon className="h-7 w-7" />
                            <input type="email" name="" id="" placeholder='Email address' required />
                        </div>
                        <div className='flex justify-center items-center gap-2 my-10'>
                            <KeyIcon className="h-7 w-7" />
                            <input type="password" name="password" id="password" placeholder='Password' required />
                        </div>
                        <input className='register py-3 rounded-lg' type="submit" value="Register" />
                        <p className='my-2'><small><span className='text-white'>Already have account?</span> <Link to='/login'>Login</Link></small></p>
                    </form>
                    <div className='mt-5'>
                        <button><img className='h-8 w-8' src={GoogleIcon} alt="" /></button>
                        <button><img className='h-9 w-9 mx-8' src={FacebookIcon} alt="" /></button>
                        <button><img className='h-9 w-9' src={TwitterIcon} alt="" /></button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;