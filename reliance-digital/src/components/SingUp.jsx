import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate()
  const [input , setInput] = useState({
    name:"",
    email:"",
    password:"",
  })

  function handleSubmit(e){
    e.preventDefault()
    localStorage.setItem("user",JSON.stringify(input))
    navigate("/login")
  }

  return (
    <div>
       <form onSubmit={handleSubmit}>
        <label htmlFor="">Your Name</label>
        <input 
          type="text" 
          name="name"
          value={input.name}
          onChange={(e)=>setInput({...input,[e.target.name]: e.target.value})
        }
        />

        <label htmlFor="">Email</label>
        <input 
          type="email" 
          name="email"
          value={input.email}
          onChange={(e)=>setInput({...input,[e.target.name]: e.target.value})
        }
        />

        <label htmlFor="">Password</label>
        <input 
          type="password" 
          name="password"
          value={input.password}
          onChange={(e)=>setInput({...input,[e.target.name]: e.target.value})
        }
        />
        
        <button type="submit">
          SignUp
        </button>

       </form>

    </div>
  )
}

export default SignUp