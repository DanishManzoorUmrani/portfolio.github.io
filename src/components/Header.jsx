import React from "react";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">Portfolio</a>
      <i className="bx bx-menu" id="menu-icon"></i>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">Experience</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
// import React from "react";

// const Header = ({ isMenuOpen, toggleMenu, activeSection, isSticky }) => {
//   return (
//     <header className={`header ${isSticky ? "sticky" : ""}`}>
//       <a href="/" className="logo">Portfolio</a>
//       <i
//         className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`}
//         id="menu-icon"
//         onClick={toggleMenu}
//       ></i>
//       <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
//         <a
//           href="#home"
//           className={activeSection === "home" ? "active" : ""}
//         >
//           Home
//         </a>
//         <a
//           href="#about"
//           className={activeSection === "about" ? "active" : ""}
//         >
//           About
//         </a>
//         <a
//           href="#services"
//           className={activeSection === "services" ? "active" : ""}
//         >
//           Services
//         </a>
//         <a
//           href="#portfolio"
//           className={activeSection === "portfolio" ? "active" : ""}
//         >
//           Portfolio
//         </a>
//         <a
//           href="#contact"
//           className={activeSection === "contact" ? "active" : ""}
//         >
//           Contact
//         </a>
//       </nav>
//     </header>
//   );
// };

// export default Header;
