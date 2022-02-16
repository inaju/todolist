import React from "react";
import { BsListTask, BsCalendarEvent } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar__container">
     

      <NavLink exact activeClassName="active" className="tasks" to="/tasks">
        <div className="navbar__container-tab">
          <BsListTask size={27} />
          <h4>Task</h4>
        </div>
      </NavLink>
      <NavLink exact activeClassName="active" to="/important">
        <div className="navbar__container-tab">
          <AiOutlineStar size={27} />
          <h4>Important</h4>
        </div>
      </NavLink>
      {/* <NavLink exact activeClassName="active" to="/planned">
        <div className="navbar__container-tab">
          <BsCalendarEvent size={27} />
          <h4>Planned</h4>
        </div>
      </NavLink> */}
      <NavLink exact activeClassName="active" to="/account">
        <div className="navbar__container-tab">
          <RiAccountCircleLine size={27} />
          <h4>Account</h4>
        </div>
      </NavLink>
    </div>
  );
};

export default Navbar;
