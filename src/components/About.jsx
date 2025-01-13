import React from "react";
import img from '../assets/danish.jpg'
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={img} alt="About Me" />
      </div>
      <div className="about-content">
        <h2 className="heading">
          <span>Experience</span>
        </h2>
        <h3>1 Year Learning Experience - Frontend Developer!</h3>
        <p>
          Gained hands-on experience in frontend development, focusing on ReactJS for building dynamic and responsive user interfaces.
          Developed expertise in HTML, CSS, JavaScript, and modern frameworks like Bootstrap, Tailwind CSS, and GSAP animations to create visually appealing and user-friendly web designs.
          Mastered state management using Redux and Context API for efficient and scalable frontend architecture.
          Built multiple frontend projects, including landing pages, to-do apps, and e-commerce platforms, demonstrating proficiency in modern web design and development practices.
          Acquired a strong understanding of responsive design principles and cross-browser compatibility for delivering seamless user experiences.
        </p>
        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  );
};

export default About;
