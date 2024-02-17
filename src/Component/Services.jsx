import React from 'react'
import "./../Style/service.css"
export const Services = () => {
  return (
    <div className="services">
    <h2 className="heading"><span>Services</span></h2>
    <div className="services-container">
        <div className="services-box">
            <i className='bx bx-code-alt' ></i>
            <h3>Web development</h3>
            <p><a href="https://www.geeksforgeeks.org/web-development/" target="_blank" font="white"></a> Encompasses a wide range of services and activities related to creating and maintaining websites and web applications.</p>
 <a href="https://www.geeksforgeeks.org/web-development/" className="btn">Read More</a>         </div>
        <div className="services-box">
            <i className='bx bxs-paint'></i>
            <h3>Web Design</h3>
            <p>Create visually appealing and user-friendly website designs tailored to the client's needs and branding requirements.</p>
 <a href="https://www.interaction-design.org/literature/topics/web-design" className="btn">Read More</a>    </div>
    </div>
</div>
  )
}
