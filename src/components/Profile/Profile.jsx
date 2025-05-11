import React, { useEffect, useState } from 'react';
import { updateUser } from "../../features/user/userSlice";
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(({ user }) => user);

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        avatar: '',
    });

    useEffect(() => {
        if (!currentUser) return;

        setValues(currentUser);
    }, [currentUser])

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isNotEmpty = Object.values(values).every(val => val);

        if (!isNotEmpty) return;

        dispatch(updateUser(values))
    }

    return (
        <div>
            {!currentUser ? (
                <span>You need to login</span>
            ) : (
                <form onSubmit={handleSubmit} className='containerformSignUp'>
                    <input type='email' placeholder='Your email' name='email' value={values.email} autoComplete='off' onChange={handleChange} required></input>
                    <input type='name' placeholder='Your name' name='name' value={values.name} autoComplete='off' onChange={handleChange} required></input>
                    <input type='password' placeholder='Your password' name='password' value={values.password} autoComplete='off' onChange={handleChange} required></input>
                    <input type='avatar' placeholder='Your avatar' name='avatar' value={values.avatar} autoComplete='off' onChange={handleChange} required></input>

                    <button type='submit' className='btnSubmitForm'>Update</button>
                </form>
            )}
        </div>
    )
}

export default Profile;