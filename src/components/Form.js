import React, { useState } from "react";
import "./Form.css";


const Form = props => {
    
    const [user, setUser] = useState({name: "", email: "", role: ""});

    const changeHandler = event => {
        setUser({...user, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        const newUser = {
            ...user
        };
        props.addNewUser(newUser);

    };

    console.log(props);

    return (
        <div className="formContainer">
            <form className="form" onSubmit={submitForm}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={user.name}
                    onChange={changeHandler}
                />

                <label htmlFor="email">Email Address</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    value={user.email}
                    onChange={changeHandler}
                />

                <label htmlFor="role">Role</label>
                <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    value={user.role}
                    onChange={changeHandler}
                />

                <button type="submit">Add Member</button>
            </form>
        </div>
    )
    

}

export default Form;