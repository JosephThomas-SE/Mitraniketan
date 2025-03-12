import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Projects = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGalleryClick = () => {
    navigate('/gallery'); // Navigate to the gallery route
  };
  return (
    <div className="projects-page">
      <h1>Our Projects</h1>
      <div className="projects-container">
      <section className="project-card">
        <h2>Community Development</h2>
        <p>We empower local communities by supporting sustainable projects that improve livelihoods.</p>
      </section>

      <section className="project-card">
        <h2>Educational Initiatives</h2>
        <p>Providing quality education to rural areas is one of our core objectives.</p>
      </section>

      <section className="project-card">
        <h2>Environmental Sustainability</h2>
        <p>Mitraniketan is committed to promoting sustainable practices and environmental conservation.</p>
      </section>

      <section className="project-card">
        <h2>School for Disadvantaged Children</h2>
        <p>A residential school providing holistic education to children from socio-economically disadvantaged backgrounds.</p>
      </section>

      <section className="project-card">
        <h2>Mitraniketan People's College (MPC)</h2>
        <p>A continuing education institute offering lifelong learning opportunities to rural youth.</p>
      </section>

      <section className="project-card">
        <h2>Farm Science Centre (Krishi Vigyan Kendra)</h2>
        <p>Promoting sustainable farming practices and supporting local farmers with innovative agricultural techniques.</p>
      </section>

      <section className="project-card">
        <h2>Rural Technology Centre (RTC)</h2>
        <p>Developing and promoting appropriate technologies to enhance rural productivity and self-sufficiency.</p>
      </section>

      <section className="project-card">
        <h2>Women's Empowerment Programs</h2>
        <p>Supporting women through skill development, education, and economic independence initiatives.</p>
      </section>

      <section className="project-card">
        <h2>Nursery & Kindergarten</h2>
        <p>Early childhood education programs providing foundational learning experiences for neighborhood children.</p>
      </section>

      <section className="project-card">
        <h2>Study Centre for Open Schooling</h2>
        <p>Providing alternative education opportunities through the National Institute of Open Schooling (NIOS).</p>
      </section>

      <section className="project-card">
        <h2>Legal Aid & Community Mediation</h2>
        <p>Providing legal assistance and conflict resolution services to the local community.</p>
      </section>

      <section className="project-card">
        <h2>Education Extension Centre (Wayanad)</h2>
        <p>Empowering tribal youth and women in Wayanad through tailored education and development programs.</p>
      </section>

      <section className="project-card">
        <h2>Research & Development in Appropriate Technology</h2>
        <p>Developing sustainable rural technologies with support from the Department of Science and Technology (DST).</p>
      </section>

      <section className="project-card">
        <h2>Vocational Training Workshops</h2>
        <p>Providing skill training in areas like pottery, weaving, carpentry, and bakery for self-reliance.</p>
      </section>

      <section className="project-card">
        <h2>Fruit Processing Unit</h2>
        <p>Supporting local agriculture with value-added products like fruit drinks, jams, and jackfruit-based goods.</p>
      </section>

      <section className="project-card">
        <h2>Educational Tourism</h2>
        <p>Offering immersive experiences for visitors to engage in discussions on education, development, and culture.</p>
      </section>
      </div>
      <button className="gallery-button" onClick={handleGalleryClick}>
        Visit Gallery <span>&rarr;</span>
      </button>
    </div>
  );
};

export default Projects;