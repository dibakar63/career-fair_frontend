
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios'
import Users from './components/Users';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AddRecipe from './components/AddReacipe';
import Edit from './components/Edit';
//import Orders from './components/Orders';


function App() {
  

  return (
    <div className="App">
    
    <Navbar/>
<Routes>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/' element={<Users/>}/>
  <Route path='/add' element={<AddRecipe/>}/>
  <Route path='/edit/:id' element={<Edit/>}/>

</Routes>
     
    </div>
  );
}

export default App;
