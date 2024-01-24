import React, { useState } from 'react'

const FormValid = () => {

    const [formdata, setFormdata] = useState({ email: "", password: "" });
    const [error, setErrors] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
    }
    const valid = () => {

        let validError = true;
        let newErrors = {};
        if (formdata.email == "") {
            validError = false;
            newErrors.email = "Please enter the email.";
        }
        if (formdata.password == "") {
            validError = false;
            newErrors.password = "Please enter the password."
        }
        setErrors(newErrors);
        return validError;

    }


    const handleSubmit = (e) => {
        
        e.preventDefault();
        const validation = valid();
        alert(validation);
        if (validation) {
            alert("I am here");
            setErrors(true);
        }
    }

    return (
        <>

            <div class="container">
                <div className="col-md-12">
                    <form onSubmit={handleSubmit}>
                        <h3 className='text-center'>Form Validation</h3>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="text" name='email' value={formdata.email} onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            {error.email && <label for="exampleFormControlInput1" className="form-label">{error.email}</label>}
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <input type="password" name='password' value={formdata.password} onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            {error.password && <label for="exampleFormControlInput1" className="form-label">{error.password}</label>}
                        </div>
                        <div className="mb-3">
                            <button class="btn btn-primary" type='submit'>Login</button>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}

export default FormValid