// src/components/Portfolio.js
import React from "react";
import img from '../assets/1.jpg'
import img2 from '../assets/f.png'
import img3 from '../assets/c.png'
import img4 from '../assets/l2.png'
import img5 from '../assets/t.png'
import img6 from '../assets/l.png'
import img7 from '../assets/w.png'

const portfolioData = [
  {
    id: 1,
    image:img,
    title: "Fylo Landing Page",
    description: "Responsive Web",
    link: "https://danishmanzoorumrani.github.io/Fylo.github.io/",
  },
  {
    id: 2,
    image: img2,
    title: "Food Web",
    description: "Responsive Food Web ",
    link: "https://glittery-crepe-598025.netlify.app/",
  },
  {
    id: 3,
    image: img3,
    title: "Crud App",
    description: "",
    link: " https://meek-haupia-9a55dc.netlify.app/",
  },
  {
    id: 4,
    image: img4,
    title: "Food App",
    description: " Responsive App  ",
    link: " https://inquisitive-granita-6c0d4e.netlify.app/",
  },
  {
    id: 5,
    image: img5,
    title: "Todo ",
    description: "",
    link: "https://aquamarine-meringue-fcc25f.netlify.app/",
  },
  {
    id: 6,
    image: img6,
    title: "Landing Page",
    description: "",
    link: "https://danishmanzoorumrani.github.io/clipboard.github.io/",
  },
  {
    id: 7,
    image: img7,
    title: "App Write",
    description: "",
    link: "https://golden-chaja-7b2e60.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading" style={{color:"white"}}>
        Latest <span>Project</span>
      </h2>
      <div className="portfolio-container">
        {portfolioData.map((item) => (
          <div className="portfolio-box" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="portfolio-layer">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <a href={item.link}>
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

