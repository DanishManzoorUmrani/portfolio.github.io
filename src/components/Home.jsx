import React from "react";
import img from '../assets/danish.jpg'
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello !</h3>
        <h1>Danish Manzoor</h1>
        <h3>
          And I'm a <span> Website Developer</span>
        </h3>
        <p>
        "I specialize in creating and customizing web applications using the MERN stack (MongoDB, ExpressJS, ReactJS, and NodeJS). I have expertise in designing, developing, and maintaining dynamic, responsive, and user-friendly websites and applications. My skills include working with HTML, CSS, JavaScript, and various modern libraries and frameworks to deliver efficient and scalable solutions."


        </p>
        <div className="social-media">
          <a href="https://www.facebook.com/share/1BN7yNPt4H/" className="face"><i className="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/danishu_mrani?utm_source=qr&igsh=cnJhZG1rajc0OHpr" className="inst"><i className="bx bxl-instagram"></i></a>
          <a href="https://github.com/DanishManzoorUmrani" className="git"><i className="bx bxl-github"></i></a>
          <a href="https://www.linkedin.com/in/danish-manzoor-572179274/"  className="link"><i className="bx bxl-linkedin"></i></a>
        </div>
        {/* <button className="btn">

        <a href="#" >Download CV</a>
        </button> */}
      </div>
      <div className="home-img">
        <img src={img} alt="Adnan Fareed" />
      </div>
    </section>
  );
};

export default Home;
