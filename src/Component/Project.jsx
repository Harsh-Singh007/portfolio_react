import React from 'react'
import "./../Style/project.css"
import p1 from "./../images/project1.png"
import p2 from "./../images/project2.png"
export const Project = () => {
  return (
    <div className="projects" id="projects">
    <h2 className="heading"> Latest<span> Project</span></h2>
    <div className="projects-container">
        <div className="projects-box">
       
        <img src={p1} alt="" />
        <div className="projects-layer">
            <h4>Online Voting System</h4>
            <p>
                Provide E-voting facilities 
            </p>
            <a href="https://github.com/Harsh-Singh007/Project_voting.git"><i className='bx bx-link' > GitHub</i></a>
         
        </div>
        
        </div>
        <div className="projects-box">
           <img src={p2} alt="" />
            <div className="projects-layer">
                <h4>VendorVista</h4>
                <p>
                Multivendor site
                </p>
                <a href="https://github.com/Harsh-Singh007/Multivendor-site"><i className='bx bx-link' > GitHub</i></a>
             
            </div>
            
            </div>
    </div>
    </div>
  )
}
