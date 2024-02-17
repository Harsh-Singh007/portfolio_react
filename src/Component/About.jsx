import React from "react";
import "./../Style/about.css";
import pic from "./../images/p1.png";
export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-img">
        <img src={pic} alt="" />
      </div>
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>

        <p>
          Hello! I'm Harsh Singh, a passionate Full Stack MERN(MongoDB,
          Express.js, React.js, Node.js) Web Developer. With a strong foundation
          in both front-end and back-end technologies, I bring a blend of
          technical expertise and creative problem-solving to every project. My
          journey in web development has equipped me with the skills to
          architect and implement robust and scalable applications. Proficient
          in the MERN stack, I specialize in crafting interactive and responsive
          user interfaces using React.js and ensuring seamless server-side
          functionality with Node.js and Express.js. My expertise extends to
          database management, with a focus on MongoDB.
        </p>
      </div>
    </div>
  );
}
