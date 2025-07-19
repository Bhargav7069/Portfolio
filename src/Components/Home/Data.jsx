  // import React from 'react';
  import CV from '../../assets/Bhargav_Kikani_Resume.pdf'; // Make sure the path to your CV is correct

  const Data = () => {
    return (
      <div className="home__data">
       <h1 className="home__title"><span>Hi, I&apos;m Bhargav Kikani</span></h1>

        <h3 className="home__subtitle">MERN Stack Developer</h3>
        <p className="home__description">
  I&apos;m a <strong>MERN Stack Developer</strong> skilled in building dynamic, full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I create responsive user interfaces and scalable backend solutions to deliver seamless and robust digital experiences.

        </p>

        <div className="home__buttons">
          <a href="#contact" className="button button--flex">
            Let&apos; Talk
            <i className="uil uil-message button__icon"></i>
          </a>
          <a href={CV} download className="button button--ghost button--flex">
            Download CV
            <i className="uil uil-download-alt button__icon"></i>
          </a>
        </div>
      </div>
    );
  };

  export default Data;