import React from "react";
import Profile from "../../assets/photo.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="Profile" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Dakshita Jain</span> Web Developer
          </h1>

          <p className="home__description">
          I am a web developer with a passion for creating engaging and user-friendly websites. I have a bachelor's degree in computer science and a portfolio of projects that showcase my skills in HTML, CSS, JavaScript, and React. I am proficient in using various web development tools and frameworks, such as Bootstrap, TailwindCss and Nodejs. I am eager to learn new technologies and best practices to improve my web development skills. I am also a team player who can communicate effectively and collaborate with other developers, designers, and clients. I am looking for an opportunity to join a dynamic and innovative web development team where I can apply my knowledge and creativity to create amazing web experiences.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
