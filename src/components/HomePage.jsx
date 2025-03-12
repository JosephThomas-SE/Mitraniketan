import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css'; // Add styles for the background

const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const homePage = document.querySelector('.home-page');
      if (window.scrollY > 50) {
        homePage.classList.add('scrolled');
      } else {
        homePage.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <h2>Welcome to Mitraniketan</h2>
        <p>Building a better tomorrow through education and self-reliance.</p>
      </section>

      {/* Flex Container */}
      <div className="flex-container">
        <section className="programs">
          <h3>Conducted</h3>
          <h1>120+</h1>
          <p>Programs related to:</p>
          <ul>
            <li>Environmental issues</li>
            <li>Children's welfare</li>
            <li>Health, etc.</li>
          </ul>
          <Link to="/projects" className="button">View our projects <span>&rarr;</span> </Link>
        </section>

        <section className="about-us">
          <h3>Who Are We?</h3>
          <p>
            Mitraniketan is a 60-year-old non-profit organisation established by renowned architect Laurie Baker and Dr. Elizabeth Baker in Vagamon, Kerala.
            It was initially established as a clinic at the foot of Kurisumala hill to render care to people who otherwise had no access to medical facilities and to make them at home while being treated.
          </p>
          <p>
            Today, Mitraniketan focuses on environmental, gender, and local issues across Kerala by organising various camps and initiatives on its campus in Vazhikadavu, Vagamon.
            Mitraniketan also promotes sustainable and organic agriculture practices as well as aids with the education of local youth.
          </p>
          <Link to="/about" className="button">Learn more <span>&rarr;</span> </Link>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
