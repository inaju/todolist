import React from 'react'
import {BsFillPlusCircleFill} from "react-icons/bs"
import './NewTodoButton.css'
const NewTodoButton = () => {
  return (
    <div className="newtodobutton__container">
        <BsFillPlusCircleFill size={50} color="#1167B1"  />
    </div>
  )
}

export default NewTodoButton 