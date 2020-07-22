import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from './form-input.component';
import { login } from '../redux/auth/authAction';


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(login(email, password))
    };

    const handleChangeEmail = e => {
        setEmail(e.target.value)
    };

    const handleChangePassword = e => {
        setPassword(e.target.value)
    };


    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChangeEmail}
                    value={email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChangePassword}
                    label='password'
                    required
                />
                <button type='submit'> SIGN IN </button>
            </form>
        </div>
    );
}

export default SignIn;
