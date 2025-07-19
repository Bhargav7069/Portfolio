  import { useState, useEffect, useCallback } from 'react';
  import './header.css';

  const Header = () => {
    const [toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    const [scrollHeader, setScrollHeader] = useState(false);

    // --- HEADER BACKGROUND ON SCROLL ---
    const changeHeaderBg = () => {
      if (window.scrollY >= 80) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    };

    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -80;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };
    useEffect(() => {
      window.addEventListener('scroll', changeHeaderBg);
      return () => window.removeEventListener('scroll', changeHeaderBg);
    }, []);

    // --- ACTIVE LINK ON SCROLL ---
    useEffect(() => {
      const sections = document.querySelectorAll('section[id]');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      }, { rootMargin: '-50% 0px -50% 0px' });

      sections.forEach(section => observer.observe(section));
      return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    // --- CORRECTED: LOGIC FOR THE SLIDING PILL ---
    const updatePillPosition = useCallback(() => {
      const navList = document.querySelector('.nav__list');
      const activeLink = document.querySelector('.nav__link.active-link');

      if (activeLink && navList) {
        // Check if we are in mobile view
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
          // Use vertical properties for mobile menu
          const top = activeLink.offsetTop;
          const height = activeLink.offsetHeight;
          navList.style.setProperty('--pill-left', `${top}px`); // CSS maps this to 'top'
          navList.style.setProperty('--pill-width', `${height}px`); // CSS maps this to 'height'
        } else {
          // Use horizontal properties for desktop menu
          const left = activeLink.offsetLeft;
          const width = activeLink.offsetWidth;
          navList.style.setProperty('--pill-left', `${left}px`);
          navList.style.setProperty('--pill-width', `${width}px`);
        }
      }
    }, []);

    // Run the pill update logic when the active link changes
    useEffect(() => {
      updatePillPosition();
    }, [activeNav, updatePillPosition]);

    // Also run the logic on window resize
    useEffect(() => {
      window.addEventListener('resize', updatePillPosition);
      return () => window.removeEventListener('resize', updatePillPosition);
    }, [updatePillPosition]);

    return (
      <header className={scrollHeader ? 'header scroll-header' : 'header'}>
        <nav className="nav container">
          <a href="#home" onClick={() => setActiveNav("#home")} className="nav__logo">Bhargav</a>

          <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
            {/* Add onClick to close menu when a link is clicked on mobile */}
            <ul className="nav__list" onClick={() => showMenu(false)}>
              <li className="nav__item">
                {/* <a href="#home" className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-estate nav__icon"></i> Home
                </a> */}
                <a
  href="#home"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("home");
    setActiveNav("#home");
    showMenu(false);
  }}
  className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
>
  <i className="uil uil-estate nav__icon"></i> Home
</a>

              </li>
              <li className="nav__item">
                <a href="#about" className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-user nav__icon"></i> About
                </a>
                {/* <a
  href="#about"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("about");
    setActiveNav("#about");
    showMenu(false);
  }}
  className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}
>
  <i className="uil uil-user nav__icon"></i> About
</a> */}

              </li>
              <li className="nav__item">
                {/* <a href="#skills" className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-file-alt nav__icon"></i> Skills
                </a> */}
              <a
    href="#skills"
    onClick={(e) => {
      e.preventDefault(); 
      scrollToSection("skills");
      setActiveNav("#skills");
    }}
    className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}
  >
    <i className="uil uil-file-alt nav__icon"></i> Skills
  </a>


              </li>
              <li className="nav__item">
                <a href="#qualification" className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-briefcase-alt nav__icon"></i> Journey
                </a>
                {/* <a
  href="#qualification"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("qualification"); // or "qualification"
    setActiveNav("#qualification");
    showMenu(false);
  }}
  className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}
>
  <i className="uil uil-briefcase-alt nav__icon"></i> Journey
</a> */}

              </li>
              <li className="nav__item">
                <a href="#contact" className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                  <i className="uil uil-message nav__icon"></i> Contact
                </a>
                {/* <a
  href="#contact"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("contact");
    setActiveNav("#contact");
    showMenu(false);
  }}
  className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
>
  <i className="uil uil-message nav__icon"></i> Contact
</a> */}

              </li>
            </ul>
            <i className="uil uil-times nav__close" onClick={() => showMenu(false)}></i>
          </div>

          <div className="nav__toggle" onClick={() => showMenu(true)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    );
  };

  export default Header;