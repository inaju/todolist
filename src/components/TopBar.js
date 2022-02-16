import React from 'react'
import "./TopBar.css"
import { IoIosArrowRoundBack } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";


const TopBar = () => {
  return (
    <div className="topbar__container">
        <div className="topbar__container-parent">
        <Link to="/">
          <IoIosArrowRoundBack color={"white"} size={45} />
        </Link>

        <BiDotsVerticalRounded  color={"white"} size={38} />
        </div>
       
    </div>
  )
}

export default TopBar