import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from "react-alert";

import FormInput from './form-input.component';
import { login } from '../redux/auth/authAction';


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useSelector((state) => state.auth);
    const alert = useAlert();
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(login(email, password));
        auth.isAuthenticated ?
            alert.show('Logged in', {
                timeout: 2000,
                type: 'success',
            }) :
            alert.show('Fail to log in', {
                timeout: 2000,
                type: 'error',
            })
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
