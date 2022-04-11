import React, { useState } from 'react';
import './Register.css'
import { MailIcon, UserCircleIcon, KeyIcon } from '@heroicons/react/outline'
import { Link, useNavigate } from 'react-router-dom';
import GoogleIcon from '../../icons/google.png'
import FacebookIcon from '../../icons/facebook.png'
import TwitterIcon from '../../icons/twitter.png'
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithFacebook, useSignInWithGoogle, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const navigate = useNavigate();

    const getName = e => {
        setName(e.target.value)
    }
    const getEmail = e => {
        setEmail(e.target.value)
    }
    const getPass = e => {
        setPass(e.target.value)
    }

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithTwitter] = useSignInWithTwitter(auth);

    const handleSubmit = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, pass)
            .then(result => {
                sendEmailVerification()
            })
    }

    if (user) {
        navigate('/products')
    }

    return (
        <div>
            <section className='p-10'>
                <h1 className='text-2xl mb-5'>Register here</h1>
                <div className='form-container w-full md:w-1/2 m-auto rounded-xl p-10'>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='flex justify-center items-center gap-2 my-5'>
                            <UserCircleIcon className="h-7 w-7" />
                            <input onBlur={getName} type="text" name="name" id="name" placeholder='Full Name' required />
                        </div>
                        <div className='flex justify-center items-center gap-2 my-10'>
                            <MailIcon className="h-7 w-7" />
                            <input onBlur={getEmail} type="email" name="" id="" placeholder='Email address' required />
                        </div>
                        <div className='flex justify-center items-center gap-2 my-10'>
                            <KeyIcon className="h-7 w-7" />
                            <input onBlur={getPass} type="password" name="password" id="password" placeholder='Password' required />
                        </div>
                        <input className='register py-3 rounded-lg' type="submit" value="Register" />
                    </form>
                    <p className='mt-3 text-red-500'><small>{error?.message}</small></p>
                    <p>{loading && 'loading...'}</p>
                    <p className='my-2'><small><span className='text-white'>Already have account?</span> <Link to='/login'>Login</Link></small></p>
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

export default Register;