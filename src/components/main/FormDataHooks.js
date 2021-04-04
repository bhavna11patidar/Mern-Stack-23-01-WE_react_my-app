import React, { useState } from 'react'

export default function FormDataHooks() {
    const initialFormData={name:"", email:"", mobile:""};
    const [formData, setFormData]=useState(initialFormData);
    const onHandleChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    const registerUser=()=>{
        console.log(formData);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 card p-4">
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={onHandleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" name="email" className="form-control" value={formData.email} onChange={onHandleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Mobile:</label>
                        <input type="text" name="mobile" className="form-control" value={formData.mobile} onChange={onHandleChange}/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={registerUser} >Register</button>
                </div>
            </div>
        </div>
    )
}
