import React, { Component } from 'react'

export default class ClassEvent extends Component {

   abc=()=>{
       console.log("Inside Abc!!!");
   }
   xyz(){
       console.log("Inside Xyz!!");
   }
   sum=(a,b)=>{
       console.log("Sum =");
        console.log(a+b);
   }
   multi(a,b){
       console.log(a*b);
   }
    render() {
        const name="Bhavna";
        return (
            <div>
               <button className="btn btn-info" onClick={this.abc}>Click Me</button> 
               <button className="btn btn-info" onClick={this.xyz}>Click Me</button> 
               <button className="btn btn-info" onClick={()=>this.sum(12,10)}>Sum</button> 
               <button className="btn btn-info" onClick={()=>this.multi(12,10)}>Multi</button>
               <h2>Name : {name}</h2> 
            </div>
        )
    }
}
