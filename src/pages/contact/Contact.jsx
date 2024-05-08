import React from 'react';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,

} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span> Touch </span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          {/* <h3 className="contact__title">Don't be Shy !</h3> */}

          <p className="contact__description">
          Thank you for visiting my portfolio website. I hope you enjoyed browsing through my projects and skills. I am always looking for feedback and opportunities to improve my work. If you have any comments or questions, please feel free to contact me via email or LinkedIn. I would love to hear from you and discuss how we can collaborate on future projects.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon'/>

              <div>
                <span className="info__title">Mail Me</span>
                <h4 className="info__desc">dakshitaj63@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon'/>

              <div>
                <span className="info__title">Call Me</span>
                <h4 className="info__desc">+91 7089645285</h4>
              </div>
            </div>

            <div className="info__item">
              <a href="https://www.linkedin.com/in/dakshita-jain-0393a1233/">
                <FaLinkedin className='info__icon'/>
                </a>
                
                <div>
                <span className="info__title">Connect with me</span>
                <h4 className="info__desc">LinkedIn</h4>
              </div>
            </div>
          </div>

          {/* <div className="contact__socials">
            <a href="https://facebook.com" className="contact__social-link">
              <FaFacebookF/>
            </a>

            <a href="https://twitter.com" className="contact__social-link">
              <FaTwitter/>
            </a>

            <a href="https://youtube.com" className="contact__social-link">
              <FaYoutube/>
            </a>

            <a href="https://dribble.com" className="contact__social-link">
              <FaDribbble/>
            </a>
          </div> */}
        </div>

      <form className="contact__form" action="https://formsubmit.co/dakshitaj63@gmail.com" method="POST">
          <div className="form__input-group">
            <div className="form__input-div">
              <input 
              type="text"
              placeholder='Your Name'
              className='form__control'
              name="name"
              required
               />
            </div>

            <div className="form__input-div">
              <input 
              type="email"
              placeholder='Your Email'
              className='form__control'
              name='email'
              required
               />
            </div>

            <div className="form__input-div">
              <input 
              type="text"
              placeholder='Your Subject'
              className='form__control'
              name='subject'
              required
               />
            </div>
          </div>

          <div className="form__input-div">
            <textarea placeholder='Your Message' className='form__control textarea' name='message'></textarea>
          </div>

          <button className='button' type='submit'>
            Send Message
            <span className="button__icon contact__button__icon">
              <FiSend/>
            </span>
          </button>
        </form>
      </div>
      </section>
  )
}

export default Contact