import React, { useState } from 'react';
const Form = () => {
    
    const [formdata, setFormdata] = useState({ username: "", password: "" });
    const [error, setErrors] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value })
    }
    const Validate = () => {
        let isValid = true;
        let newErrors = {};
        if (!formdata.username) {
            isValid = false;
            newErrors.username = "Please enter the user name."
        }
        if (!formdata.password) {
            isValid = false;
            newErrors.password = "Please enter the password."
        }
        setErrors(newErrors);
        return isValid;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Validate()) {
            alert("Form");
            setErrors(true);
        }
    }
    return (
        <>  <div>Form</div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={formdata.username} onChange={handleChange} name='username' /><br />
                {error.username && <div className="error">{error.username}</div>}
                <input type='text' value={formdata.password} onChange={handleChange} name='password' /><br />
                {error.password && <div className="error">{error.password}</div>}
                <button type='submit'>Login</button>
            </form>
        </>
    )
}
export default Form