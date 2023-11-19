import React from 'react'
import { useEffect,useState } from 'react';
import { Link,useParams } from 'react-router-dom';
import axios from 'axios'
import { useAuth } from './context/auth';
const Users = () => {
    const [recipe,setRecipes]=useState([])
    const [auth,setAuth]=useState("")
    const [search,setSearch]=useState('')
    const [value,setValue]=useState('')


   // const id=useParams().id;
    const fetchHandler=async(search)=>{
        return  await axios.get(`https://backend23-sn7a.onrender.com/api/recipe`)
         .then((res)=>res.data);
         
     
       }
       useEffect(()=>{
         fetchHandler().then((data)=>setRecipes(data.recipes));
         
       },[])
       const MapData=()=>{
   
        const filterData=recipe.filter((i)=>{
            return i.name.toLowerCase() == search.toLowerCase()
        })
        setRecipes(filterData)
      }
      const chekData=()=>{
        const filterData=recipe.filter((i)=>{
          return i.category.toLowerCase() == value
        })
        setRecipes(filterData)
      }
       const deleteHandler=async(id)=>{
        const res= await axios.delete(`https://backend23-sn7a.onrender.com/api/${id}`)
        try {
          if(res && res.data.success){
            alert('Data deleted sucessfully')
            window.location.reload()
            
    
          }
        } catch (error) {
          alert("Something went wrong")
        }
      }
       
       
  return (
    <div>
    <div className='search'>
    <div className='first'>
      <input name={search} placeholder='Search by name' onChange={(e)=>setSearch(e.target.value)}/>
    <button  className="btn btn-primary"onClick={MapData} >Search</button>
     </div>
     <div className='second'>
    <input  name={value} placeholder=' Veg or non-veg'   onChange={(e)=>setValue(e.target.value)}/>
    
    <button className="btn btn-primary" onClick={chekData} >Filter</button>
    </div>
    
    </div>
    <div className='container'>
     
    
      {recipe.map(({name,image,_id,time,category,ingredients})=>(
        
        <div className='card' key={_id}>
          <h1 className='title'>Name:{name}</h1>
          <img src={image}/>
          <p>Ingredients:{ingredients+", "}</p>
          <p>Category:{category}</p>
          <p>Time(minutes):{time}</p>
          <div className='btn_btn'>
          <Link to={`/edit/${_id}`} className='btn btn-success'>Edit</Link>
            <button className='btn btn-primary' onClick={()=>deleteHandler(_id)}>Delete</button>
          </div>
         
         
       

  
         </div>
         
        
        
       
      ))}
      
      
    </div>
    </div>
  )
}

export default Users
