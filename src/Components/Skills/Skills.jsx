// import React from 'react';
import './Skills.css';

// Data for the skills, easy to update
const skillsData = [
  {
    title: "Frontend",
    icon: "uil uil-brackets-curly",
    skills: ["HTML", "CSS", "JavaScript","TypeScript", "React.js", "Next.js"],
  },
  {
    title: "Backend",
    icon: "uil uil-server-network",
    skills: ["Node.js", "Express.js", "Java"],
  },
  {
    title: "Databases",
    icon: "uil uil-database",
    skills: ["MongoDB", "SQL"],
  },
  {
    title: "Tools & Platforms",
    icon: "uil uil-wrench",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      {/* Consistent Animated Background */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="skills__blob skills__blob--1"></div>
      <div className="skills__blob skills__blob--2"></div>

      <div className="section__header">
        <h2 className="section__title">My Skills</h2>
      </div>

      <div className="skills__container container grid">
        {/* Mapping data to create four separate cards */}
        {skillsData.map((category, index) => (
          <div className="skills__card" key={index}>
            <div className="skills__card-header">
              <i className={`${category.icon} skills__icon`}></i>
              <h3 className="skills__card-title">{category.title}</h3>
            </div>
            <div className="skills__list">
              {category.skills.map((skill, skillIndex) => (
                <span className="skill__tag" key={skillIndex}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;  