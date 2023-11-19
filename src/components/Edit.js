import React, { useState } from 'react'
import { useAuth } from './context/auth'

import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
const Edit = () => {
    const [auth,setAuth]=useAuth()
    const [name,setName]=useState("");
    const [image,setImage]=useState("");
    const [ingredients,setIngredients]=useState("");
    const [time,setTime]=useState("");
    const [category,setCategory]=useState("");
    const id=useParams().id
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const res=await  axios.put(`http://localhost:5000/api/update/${id}`,{name,image,ingredients,time,category})
          if( res && res.data.success){
            toast.success(res.data.message)
            navigate('/')
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
        <h1>Edit Recipe</h1>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} required/>
    
    </div>
    <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Enter imageUrl' value={image} onChange={(e)=>setImage(e.target.value)} required/>
    
    </div>
  <div className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Time taken in minutes' value={time} onChange={(e)=>setTime(e.target.value)} required/>
  </div>
  <div className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter ingredients' value={ingredients} onChange={(e)=>setIngredients(e.target.value)} required/>
  </div>
  <div className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter category' value={category} onChange={(e)=>setCategory(e.target.value)} required/>
  </div>
 
    
   
  
  <button type="submit" className="btn btn-primary">Submit</button>
  
</form>
</div>
      
    
  )
}

export default Edit
