import React from 'react'
import "./Contact.scss"
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <main class="contact">
    <h2>Contact Me ...</h2>
    <div class="contact__list">
      <div class="contact__item">
        <div className='contact__icon'><MdEmail /> Email</div>
        <a href='mailto:furkandogu2018@gmail.com' target="_blank" rel="noreferrer" class="text-secondary">furkandogu2018@gmail.com</a>
      </div>
      <div class="contact__item">
        <div className='contact__icon'><FaLinkedin /> LinkedIn</div>
        <a href='https://www.linkedin.com/in/furkan-dogu/' target="_blank" rel="noreferrer" class="text-secondary">www.linkedin.com/in/furkan-dogu</a>
      </div>
      <div class="contact__item">
        <div className='contact__icon'><FaGithub /> Github</div>
        <a href='https://github.com/furkan-dogu' target="_blank" rel="noreferrer" class="text-secondary">github.com/furkan-dogu</a>
      </div>
    </div>
  </main>
  )
}

export default Contact