import React, { Children, useContext } from 'react'
import { Authcontext } from './Authentication'

const Accountrapper = ({children}) => {
    const user = useContext(Authcontext)
  return (
    <div>
    {
        !user.person?
        (<>
        <h2>Permission Reqired...❌</h2>
        <h4>Please Login After try</h4>    
        </>
        ):(<div>{children}</div>)
    }
    </div>
  )
}

export default Accountrapper