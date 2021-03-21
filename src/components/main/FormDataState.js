import React, { Component } from 'react'

export default class FormDataState extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            contact:"",
        }
    }
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=()=>{
        console.log(this.state);
    }
    render() {
        const {name, email, contact}=this.state
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-6 card py-5">
                        <h1>Form Data With State</h1>
                        <form>
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" name="name" className="form-control" value={name} onChange={this.onHandleChange}></input>
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input type="text" name="email" className="form-control" value={email} onChange={this.onHandleChange}></input>
                            </div>
                            <div className="form-group">
                                <label>Contact:</label>
                                <input type="text" name="contact" className="form-control" value={contact} onChange={this.onHandleChange}></input>
                            </div>
                            <div className="text-center">
                                <button type="button" className="btn btn-info" onClick={this.onSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
