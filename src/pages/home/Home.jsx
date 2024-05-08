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
            <span>I'm Dakshita Jain</span>
            <p style={{whiteSpace: "nowrap"}}> MERN Stack Developer</p>
          </h1>

          <p className="home__description">
            As a dedicated MERN stack developer, I've recently completed an
            internship where I honed my skills in building robust web
            applications. My proficiency includes JavaScript, React.js, Node.js,
            Express.js, and MongoDB, allowing me to create efficient and
            scalable solutions. Now, I'm excited to leverage my experience and
            contribute effectively to a dynamic team in a full-time role. Ready
            to embark on the next chapter of my career journey.
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
