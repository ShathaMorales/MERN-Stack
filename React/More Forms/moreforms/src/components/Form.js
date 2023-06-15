import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length === 1) {
            setFirstNameError('First Name must be at least 2 characters!');
        } else {
            setFirstNameError('');
            setFirstName(e.target.value);
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length === 1) {
            setLastNameError('Last Name must be at least 2 characters!');
        } else {
            setLastNameError('');
            setLastName(e.target.value);

        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 5) {
            setEmailError('Email Address must be longer than 5 characters!');
        } else {
            setEmailError('');
            setEmail(e.target.value);
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 8) {
            setPasswordError('Password must be at least 8 characters!');
        } else {
            setPasswordError('');
            setPassword(e.target.value);
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length > 0 && e.target.value !== password) {
            setConfirmPasswordError('Passwords must match!');
        } else {
            setConfirmPasswordError('');
            setConfirmPassword(e.target.value);
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
    };

    return (
        <div className="mt-5 container d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={createUser} className="p-5 mt-5 bg-light">
                <div className="mb-3">
                    <input
                        placeholder='First Name'
                        type="text"
                        className="form-control"
                        onChange={handleFirstName}
                    />
                </div>
                {firstNameError ? <p style={{ color: 'red' }}>{firstNameError}</p> : ''}

                <div className="mb-3">
                    <input
                        placeholder='Last Name'
                        type="text"
                        className="form-control"
                        onChange={handleLastName}
                    />
                </div>
                {lastNameError ? <p style={{ color: 'red' }}>{lastNameError}</p> : ''}

                <div className="mb-3">
                    <input
                        placeholder='Email Address'
                        type="text"
                        className="form-control"
                        onChange={handleEmail}
                    />
                </div>
                {emailError ? <p style={{ color: 'red' }}>{emailError}</p> : ''}

                <div className="mb-3">
                    <input
                        placeholder='Password'
                        type="password"
                        className="form-control"
                        onChange={handlePassword}
                    />
                </div>
                {passwordError ? <p style={{ color: 'red' }}>{passwordError}</p> : ''}

                <div className="mb-3">
                    <input
                        placeholder='Confirm Password'
                        type="password"
                        className="form-control"
                        onChange={handleConfirmPassword}
                    />
                </div>
                {confirmPasswordError ? <p style={{ color: 'red' }}>{confirmPasswordError}</p> : ''}

                <div className="d-grid">
                    <button type="submit" className="btn btn-secondary">
                        Create User
                    </button>
                </div>
                <hr className='m-5'></hr>
                <div className='m-3'>
                    <h3 className='m-4'>Your Form Data</h3>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email Address: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm Password: {confirmPassword}</p>
                </div>
            </form>
        </div>
    );
};

export default Form;