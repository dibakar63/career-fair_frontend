import React from 'react'
import { NavLink,Link,useNavigate } from 'react-router-dom'
import {GiShoppingBag} from 'react-icons/gi'
import { useAuth } from './context/auth'
import toast from 'react-hot-toast'

const Navbar = () => {
  const [auth,setAuth]=useAuth()
  
  const handleClick=()=>{
    setAuth({
      ...auth,
      user:null,
      token:""

    })
    localStorage.removeItem("auth")
    toast.success("Logout successfully")
    
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="navbar-brand" ><GiShoppingBag/>  Dibakar Recipe App</Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        
        {!auth.user ? <>
          <li className="nav-item">
          <NavLink className="nav-link"  to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/login">Login</NavLink>
        </li>
        </> :  <div className='navbar_list'>
        <li className='nav_title'>Logged in as {auth.user.name}</li><li className="nav-item">
          <NavLink className="nav-link"  onClick={handleClick} to='/add'>Add Recipe</NavLink>
          <NavLink className="nav-link"  onClick={handleClick} to='/login'>Logout</NavLink>
        </li>
        
        </div>}
        
        
      </ul>
      
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar