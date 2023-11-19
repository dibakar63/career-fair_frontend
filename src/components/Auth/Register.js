import React, { useState } from 'react'


import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const res=await  axios.post('http://localhost:5000/api/register',{name,email,password})
          if( res && res.data.success){
            toast.success(res.data.message)
            navigate('/login')
          }else{
            toast.error(res.data.message)
          }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong')
        }
    }
  return (
    
      <div className='register'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} required/>
    
    </div>
    <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
    
    </div>
  <div className="mb-3">
    
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
  </div>
 
    
   
  
  <button type="submit" className="btn btn-primary">Submit</button>
  
</form>
</div>
      
    
  )
}

export default Register
