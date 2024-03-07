import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import "../styles/Login.css"
import PreNavbar from './PreNavbar'
import Midnavbar from './Midnavbar'

const Login = () => {
    const navigate =useNavigate()
    const [input , setInput] = useState({
        email:"",
        password:"",
      })

      function handleSubmit(e){
        e.preventDefault()
        const loggedUser = JSON.parse (localStorage.getItem("user"))
        if(input.email===loggedUser.email && input.password === loggedUser.password)
        {
            localStorage.setItem("loggedin",true)
            navigate("./")
        }else{
            alert("Wrong Credentials")
        }
      }
    
  return (
   
    <div className='logincard'>
         <PreNavbar/>
        <Midnavbar/>
        
        <form onSubmit={handleSubmit}>
        <label className='label' htmlFor="">Email</label>
        <input 
          className='input'
          type="email" 
          name="email"
          value={input.email}
          onChange={(e)=>setInput({...input,[e.target.name]: e.target.value})
        }
        />

        <label className='label' htmlFor="">Password</label>
        <input 
          className='input'
          type="password" 
          name="password"
          value={input.password}
          onChange={(e)=>setInput({...input,[e.target.name]: e.target.value})
        }
        />
        
        <button type="submit" className='button'>
          Login
        </button>

       </form>
    </div>
  )
}

export default Login