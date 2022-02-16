import React from 'react'
import './Welcome.css'
import welcome_image from "../assets/hello_todolist.svg"
import gmail from "../assets/gmail_icon.png"
import twitter from "../assets/twitter_icon.png"
import facebook from "../assets/facebook_icon.png"



import LoginCard from '../components/LoginCard'

const Welcome = () => {
  return (
        <div className="welcome__container">
          <div className="welcome__container-img">
          <img src={welcome_image} alt="" />

          </div>
          <h2>Welcome to Taby Todo</h2>
          <div className="welcome__container-login">
            <LoginCard icon={gmail} platform="Gmail" />
            <LoginCard icon={twitter} platform="twitter" />
            <LoginCard icon={facebook} platform="facebook" />

          </div>
          Continue with Beta Version


    </div>
  )
}

export default Welcome