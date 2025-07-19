// import React from 'react';
import Icon from './Icon';
import Data from './Data';
import ViewMore from './ViewMore';
import './home.scss'; // The CSS file that powers the entire section

const Home = () => {
  return (
    <section className="home section" id="home">
      {/* Dynamic Background Elements */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="home__blob home__blob--1"></div>
      <div className="home__blob home__blob--2"></div>

      <div className="home__container container grid">
        {/* ========== COLUMN 1: TEXT CONTENT ========== */}
        <div className="home__content">
          <Icon />
          <Data />
          <ViewMore />
        </div>

        {/* ========== COLUMN 2: ANIMATED IMAGE ========== */}
        <div className="home__image-container">
          <div className="home__image-blob">
            {/* The background image is applied via CSS */}
            <div className="home__img"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;  