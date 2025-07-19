// import React from 'react';
import './About.css';
import AboutImg from '../../assets/MERN.png'; // Assuming MERN.png is your illustration

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="section__header">
        <h2 className="section__title">About Me</h2>
        {/* <span className="section__subtitle">My Professional Journey</span> */}
      </div>

      <div className="about__container container grid">
        <div className="about__image-wrapper">
          <img src={AboutImg} alt="MERN Stack Developer Illustration" className="about__img" />
        </div>

        <div className="about__content">
          {/* UPDATED: Text is now in separate paragraphs */}
          <p className="about__description">
I&apos;m a  <strong>MERN Stack developer</strong> with 1 year of overall experience in developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I have a strong foundation in both frontend and backend development, backed by 6 months of intensive training at JSpiders, Bangalore.


          </p>
          <p className="about__description">
Throughout my experience, I&apos;ve worked on real-time projects, building responsive user interfaces and scalable backend APIs. I follow clean coding standards, write maintainable code, and focus on delivering smooth, user-centric digital experiences.        </p>
          <p className="about__description">
I&apos;m a quick learner with a collaborative mindset, always eager to adopt new technologies and take on challenging problems to build impactful, performance-driven applications</p>
        </div>
      </div>
    </section>
  );
};

export default About;