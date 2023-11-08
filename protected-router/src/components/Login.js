import React, { useContext, useState } from 'react'
import { Authcontext } from './Authentication'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [inputvalue,setinputvalue]=useState()
    const user = useContext(Authcontext)
    const navigate = useNavigate()
    const handlelogin=()=>{
        user.login(inputvalue)
        navigate('/account')
    }

  return (
    <div className='login'>
        <h2>Login</h2>
        <input type="text" onChange={(e)=>setinputvalue(e.target.value)} />

        <button onClick={handlelogin}>Login</button>
    </div>
  )
}

export default Login