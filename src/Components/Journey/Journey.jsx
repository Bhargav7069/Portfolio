import { useState } from 'react';
import './Journey.css';

const Journey = () => {
  // Default state is 1, which will now correspond to "Experience"
  const [toggleState, setToggleState] = useState(1);
  const [modalData, setModalData] = useState(null);

  const educationData = [
    { title: 'Master of Computer Applications (MCA)', institution: 'JAIN (Deemed-to-be University), Bangalore', period: 'June 2023 – July 2025' },
    { title: 'MERN Stack Training', institution: 'JSpider Institute, Bangalore', period: 'May 2024 -Nov 2024' },
    { title: 'Bachelor of Science (BSc)', institution: 'MKBU, Bhavnagar, Gujarat', period: 'June 2019 - March-2022' },
  ];

  const experienceData = [
    {
      title: 'MERN Stack Developer',
      institution: 'Techisor Private Limited ( Bengaluru, India)',
      period: 'Nov 2024 - Present',
description: [
  "Proficient in building full-stack web applications using the MERN stack: MongoDB, Express.js, React.js, and Node.js.",
  "Experienced in designing and developing scalable RESTful APIs.",
  "Skilled in integrating third-party services such as calling integration, payment gateways, and messaging APIs.",
  "Developed responsive and dynamic frontend interfaces using React.js.",
  "Worked with real-time data visualization and Google Maps for live tracking, geofencing, and geotagging.",
  "Focused on improving user experience and enhancing business process efficiency through modern web solutions."
]


    },
    // {
    //   title: 'Full-Stack Projects',
    //   institution: 'Personal & Academic Work',
    //   period: '2023 - 2024',
    //   description: 'During my training and academic period, I independently built several full-stack web applications. This included creating a real-time stock analysis dashboard using WebSockets, an e-commerce platform with secure payment gateway integration, and various other projects that solidified my skills in the entire MERN stack, from database schema design to responsive UI development.'
    // },
  ];

  const openModal = (data) => setModalData(data);
  const closeModal = () => setModalData(null);

  return (
    <section className="qualification section" id="qualification">
      {/* ADDED: Consistent Animated Background */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="qualification__blob qualification__blob--1"></div>
      <div className="qualification__blob qualification__blob--2"></div>

      <div className="section__header">
        <h2 className="section__title">My Journey</h2>
        <span className="section__subtitle">Experience & Education</span>
      </div>

      <div className="qualification__container container">
        {/* --- TABS (ORDER SWAPPED) --- */}
        <div className="qualification__tabs">
          {/* Experience is now first */}
          <button className={`tabs-button ${toggleState === 1 ? 'active' : ''}`} onClick={() => setToggleState(1)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </button>
          {/* Education is second */}
          <button className={`tabs-button ${toggleState === 2 ? 'active' : ''}`} onClick={() => setToggleState(2)}>
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </button>
        </div>

        {/* --- CONTENT SECTIONS (LOGIC SWAPPED) --- */}
        <div className="qualification__sections">
          {/* Experience Content (now shows when toggleState is 1) */}
          {/* <div className={`qualification__content ${toggleState === 1 ? 'qualification__content--active' : ''}`}> */}
          <div className={`qualification__content ${toggleState === 1 ? 'qualification__content--active experience-active' : ''}`}>
            {experienceData.map((item, index) => (
              <div className="qualification__card" key={index}>
                <h3 className="qualification__card-title">{item.title}</h3>
                <p className="qualification__card-subtitle">{item.institution}</p>
                <div className="qualification__card-calendar">
                  <i className="uil uil-calendar-alt"></i> {item.period}
                </div>
                <button onClick={() => openModal(item)} className="qualification__modal-button">
                  Read More <i className="uil uil-arrow-right"></i>
                </button>
              </div>
            ))}
          </div>

          {/* Education Content (now shows when toggleState is 2) */}
          <div className={`qualification__content ${toggleState === 2 ? 'qualification__content--active' : ''}`}>
            {educationData.map((item, index) => (
              <div className="qualification__card" key={index}>
                <h3 className="qualification__card-title">{item.title}</h3>
                <p className="qualification__card-subtitle">{item.institution}</p>
                <div className="qualification__card-calendar">
                  <i className="uil uil-calendar-alt"></i> {item.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MODAL (POPUP) --- */}
      {modalData && (
        <div className="modal__overlay" onClick={closeModal}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <i className="uil uil-times modal__close" onClick={closeModal}></i>
            <h3 className="modal__title">{modalData.title}</h3>
            <p className="modal__subtitle">{modalData.institution} | {modalData.period}</p>
            <div className="modal__description">
  <ul className="modal__list">
    {modalData.description.map((point, idx) => (
      <li key={idx}>
        <span className="icon">➤</span> {point}
      </li>
    ))}
  </ul>
</div>


          </div>
        </div>
      )}
    </section>
  );
};

export default Journey;