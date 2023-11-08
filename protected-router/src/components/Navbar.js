import { NavLink, useNavigate } from 'react-router-dom'
import { Authcontext } from './Authentication'
import { useContext } from 'react'

const Navbar = () => {
    const user = useContext(Authcontext)
    const navigate = useNavigate()

    const handlelogout =()=>{
        user.logout()
        navigate('/')
    }
  return (
    <div className='navbar-container'>
        <div className='navbar'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/account'}>Account</NavLink>
            {!user.person ? (
                <NavLink to={'/login'}>Login</NavLink>
            ):<button onClick={handlelogout} className='logoutbtn'>logout</button>

            }
        </div>
    </div>
  )
}

export default Navbar