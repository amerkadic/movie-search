import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import FormInput from './form-input.component';
import { login } from '../redux/auth/authAction';

const SignIn = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const auth = useSelector((state) => state.auth);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(login(email, password));
        if (auth.isAuthenticated) {
            history.push('/');
        }
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
