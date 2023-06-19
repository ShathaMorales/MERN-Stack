import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showFormData, setShowFormData] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setShowFormData(true);
    };

    return (
        <div className="mt-5 container d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={createUser} className="p-5 mt-5 bg-light">
                <div className="mb-3">
                    <input
                        placeholder='First Name'
                        type="text"
                        className="form-control"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        placeholder='Last Name'
                        type="text"
                        className="form-control"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        placeholder='Email Address'
                        type="text"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        placeholder='Password'
                        type="password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        placeholder='Confirm Password'
                        type="password"
                        className="form-control"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
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