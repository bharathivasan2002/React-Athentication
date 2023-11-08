import React, { useContext } from 'react'
import { Authcontext } from './Authentication'

const Account = () => {
    const user = useContext(Authcontext)
  return (
    <div>
        <h3>Thank you for Login...😎💕</h3>
        <h4>User Name : {user.person}</h4>
    </div>
  )
}

export default Account