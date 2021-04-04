import React, { useState } from 'react'

export default function () {

    const [name, setName]=useState("Avani");
    const [count, setCount]=useState(0);
    const [count2, setCount2]=useState(0);
    const setCounter2Value=()=>{
        setCount2(count2+1);
    }
    const [email, setEmail]=useState("");
    const [contact, setContact]=useState("");
    return (
        <div>
            <h1>Hooks Example</h1>
            <h2>Hello {name}</h2>
            <button className="btn btn-info" onClick={()=>setName("Bhavna")}> Click To Change name</button>
            <h2>Count = {count}</h2>
            <button className="btn btn-info" onClick={()=>{setCount(count+1)}}>Count +</button>
            <button className="btn btn-info" onClick={()=>{setCount(count-1)}}>Count -</button>

            <h2>Count 2 ={count2}</h2>
            <button className="btn btn-info" onClick={setCounter2Value}>Count2+1</button>

            <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" name="contact" value={contact} onChange={(e)=>setContact(e.target.value)}/>
        
        </div>
    )
}
