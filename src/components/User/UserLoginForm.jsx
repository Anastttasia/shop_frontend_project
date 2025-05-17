import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CrossLogo from '../../image/icon/icon_cross.svg'

import './UserSignupForm.css'
import { loginUser } from '../../features/user/userSlice';

const UsreLoginForm = ({ toggleCurrentFormType, closeForm }) => {
    const dispatch = useDispatch();

    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isNotEmpty = Object.values(values).every(val => val);

        if(!isNotEmpty) return;

        dispatch(loginUser(values))
        closeForm();
    }

    return (
        <div className='wrapperSignup'>
            <div onClick={closeForm} className='btnCloseForm'><img src={CrossLogo} alt='Close' className='crossLogoForm'></img></div>
            <div className='titleform'>Log In</div>
            <form onSubmit={handleSubmit} className='containerformSignUp'>
                <input type='email' placeholder='Your email' name='email' value={values.email} autoComplete='off' onChange={handleChange} required></input>
                <input type='password' placeholder='Your password' name='password' value={values.password} autoComplete='off' onChange={handleChange} required></input>

                <div className='textForm' onClick={() => toggleCurrentFormType('signup')}><p className='textFormP'>Create an account</p></div>

                <button type='submit'className='btnSubmitForm'>Login</button>
            </form>
        </div>)
};

export default UsreLoginForm;