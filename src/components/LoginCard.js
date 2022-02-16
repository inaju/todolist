import React from 'react'
import './LoginCard.css'
import { NavLink } from "react-router-dom";

const LoginCard = ({icon, platform}) => {
  return (
    <NavLink exact activeClassName="active"  to="/tasks">
    <div className="logincard__container">
       
        <img src={icon} alt="" />
        <p>
           <b>
           Continue with {platform}
               </b> 
        </p>
       
    </div>
    </NavLink>
  )
}

export default LoginCard