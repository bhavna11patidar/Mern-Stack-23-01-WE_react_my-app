import React, { Component } from 'react'

export default class StateData extends Component {
    constructor(props){
        super(props);
        console.log("Constructor");
        this.state={
            name:"Varsha",
            email:"varsha@gmail.com",
        }
    }
    changeData=()=>{
        //console.log("Inside Change Data");
        this.setState({name:"Bhavna", email:"bhavna@gmail.com"});
    }

    render() {
        const {name,email}=this.state;
        return (
            <div>
               <h2>Name: {this.state.name}</h2> 
               <h2>Email: {this.state.email}</h2> 
               <h1>Name: {name}</h1>
               <h1>Email: {email}</h1>
               <button onClick={this.changeData}>Change Data</button>
            </div>
        )
    }
}
