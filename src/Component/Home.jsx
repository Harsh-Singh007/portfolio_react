import React from 'react'
import "./../Style/home.css"
import pic from "./../images/p2.png"
import { SocialIcon } from 'react-social-icons'
export const Home = () => {
  return (
    <div className="home">
    <div className="home-content">
        <h3>Hello ,It's me</h3>
        <h1>Harsh Singh</h1>
        <h3>And I'm <span className="multiple-text">Full Stack Web Developer</span></h3>
        <p>
            I bring a blend of technical expertise and creative problem solving to every project. Let's build something extraordinary together!
            </p>
            <div className="social-media">
            <SocialIcon url="https://instagram.com/h_a_r_s_h.rajput?igshid=ZGUzMzM3NWJiOQ==" />
          <SocialIcon url="https://twitter.com/Harsh93148409?t=XNgahdQAK6OlqcSXvGnsDQ&s=08" />
          <SocialIcon url="https://www.linkedin.com/in/harsh-singh-626449235" />
          <SocialIcon url="https://github.com/Harsh-Singh007" />
         </div>
      
    </div>
    <div className="home-img">
       <img src={pic} alt="" />
    </div>
    </div>
  )
}
