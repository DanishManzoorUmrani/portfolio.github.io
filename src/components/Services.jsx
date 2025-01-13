import React from "react";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">
        Our <span>Services</span>
      </h2>
      <div className="services-container">
        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>Web Development</h3>
          <p>Creating and maintaining websites to deliver engaging and functional online experiences.</p>
          <a href="#" className="btn">Read More</a>
        </div>
        <div className="services-box">
          <i className="bx bx-paint"></i>
          <h3>Web Designing</h3>
          <p>Designing visually appealing and user-friendly websites.</p>
          <a href="#" className="btn">Read More</a>
        </div>
        {/* <div className="services-box">
          <i className="bx bx-bar-chart-alt"></i>
          <h3>Web Optimization</h3>
          <p>Enhancing website performance and SEO for better user experiences.</p>
          <a href="#" className="btn">Read More</a>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
