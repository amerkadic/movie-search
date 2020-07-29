import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";

import FormInput from './form-input.component';
import { register } from '../redux/auth/authAction';


const SignUp = () => {
    const history = useHistory();
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const alert = useAlert();
    const [initialRender, setInitialRender] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        await dispatch(register(displayName, email, password));
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        setTimeout(() => {
            setInitialRender(true);
        }, 300);
    };

    useEffect(() => {
        if (initialRender) {
            if (auth.isAuthenticated) {
                alert.show('Logged in', {
                    timeout: 2000,
                    type: 'success',
                })
                history.push('/');
            }
            else {
                alert.show('Fail to log in', {
                    timeout: 2000,
                    type: 'error',
                })
            }
        }
    }, [auth.isAuthenticated, initialRender, alert, history]);

    const handleChangeName = e => {
        setDisplayName(e.target.value)
    };

    const handleChangeEmail = e => {
        setEmail(e.target.value)
    };

    const handleChangePassword = e => {
        setPassword(e.target.value)
    };

    const handleChangeConfirmPassword = e => {
        setConfirmPassword(e.target.value)
    };


    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChangeName}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChangeEmail}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChangePassword}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChangeConfirmPassword}
                    label='Confirm Password'
                    required
                />
                <button type='submit'>SIGN UP</button>
            </form>
        </div>
    );
}

export default SignUp;
