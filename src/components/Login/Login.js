import { KeyIcon, MailIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleIcon from '../../icons/google.png'
import FacebookIcon from '../../icons/facebook.png'
import TwitterIcon from '../../icons/twitter.png'

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/products'

    const getEmail = e => {
        setEmail(e.target.value)
    }
    const getPass = e => {
        setPass(e.target.value)
    }

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [existUser] = useAuthState(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithTwitter] = useSignInWithTwitter(auth);

    const handleSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, pass)
    }

    if (existUser) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <section className='p-10'>
                <h1 className='text-2xl mb-5'>Login</h1>
                <div className='form-container w-full md:w-1/2 m-auto rounded-xl p-10'>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='flex justify-center items-center gap-2 my-10'>
                            <MailIcon className="h-7 w-7" />
                            <input onBlur={getEmail} type="email" name="" id="" placeholder='Email address' required />
                        </div>
                        <div className='flex justify-center items-center gap-2 my-10'>
                            <KeyIcon className="h-7 w-7" />
                            <input onBlur={getPass} type="password" name="password" id="password" placeholder='Password' required />
                        </div>
                        <input className='register py-3 rounded-lg' type="submit" value="Login" />
                    </form>
                    <button onClick={() => sendPasswordResetEmail(email)} className='mt-2 opacity-30'>Forget password?</button>
                    <p className='text-red-500'><small>{error?.message}</small></p>
                    <p>{loading && 'loading...'}</p>
                    <p><small><span className='text-white'>Don't have account?</span> <Link to='/register'>Register</Link></small></p>
                    <div className='mt-5'>
                        <button onClick={() => signInWithGoogle()}><img className='h-8 w-8' src={GoogleIcon} alt="" /></button>
                        <button onClick={() => signInWithFacebook()}><img className='h-9 w-9 mx-8' src={FacebookIcon} alt="" /></button>
                        <button onClick={() => signInWithTwitter()}><img className='h-9 w-9' src={TwitterIcon} alt="" /></button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;