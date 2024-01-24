import React, { useState } from "react";
function LoginForm() {

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const validateForm = () => {
        let isValid = true;
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = "Email is required";
            isValid = false;
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form data:", formData);
            setSubmitted(true);
        } else {
        }
    };
    const isFormValid = Object.keys(errors).length === 0;
    return (
        <div>
            <h2>Login</h2>
            {submitted ? (
                <div className="success-message">Login successful!</div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                        {errors.password && <div className="error">{errors.password}</div>}
                    </div>
                    <button type="submit" disabled={!isFormValid}>
                        Login
                    </button>
                </form>
            )}
        </div>
    );
}
export default LoginForm;