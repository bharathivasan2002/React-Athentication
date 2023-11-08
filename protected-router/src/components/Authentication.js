import React, { createContext, useState } from 'react'
export const Authcontext = createContext()

const Authentication = ({children}) => {
const[person,setperson]=useState(null)

const login = (user)=>{
    setperson(user)
}

const logout = ()=>{
    setperson(null)
}
  return (
    <Authcontext.Provider value={{person,login,logout}}>
        <div>
            {children}
        </div>
    </Authcontext.Provider>    
  )
}

export default Authentication