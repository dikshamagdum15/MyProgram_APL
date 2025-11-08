import React from "react";
import "./App.css";
import profilePic from "./assets/profilePic.png";

const Resume = () => {
  return (
    <div className="profile-container">
      {/* Header */}
      <div className="profile-header">
        <img
          src={profilePic}
          alt="Profile"
          className="profile-img"
        />
        <h1>Diksha Magdum</h1>
        <p className="bio">Full Stack Developer | React & Node.js Enthusiast 🚀</p>
        <p>📧 dikshamagdum15@gmail.com | 📞 (+91) 7744884109</p>
        <p>📍 Kolhapur, Maharashtra, India | 🔗 https://www.linkedin.com/in/diksha-magdum</p>
      </div>

      {/* Professional Summary */}
      <div className="section">
        <h2>📄 Professional Summary</h2>
        <p>
          Enthusiastic Computer Science graduate with a strong foundation in programming, web development, and database management. Proficient in React, JavaScript, and modern front-end tools. Quick learner with excellent problem-solving skills and a strong interest in building scalable applications. Seeking an opportunity to apply skills and grow as a developer.
        </p>
      </div>

     {/* Education */}
      <div className="section">
        <h2>🎓 Education</h2>
        <div className="education-item">
          <h3>Bachelor of Science in Computer Science</h3>
          <p>D.Y.Patil College of engineering and technology,Kolhapur | Graduated: 2026</p>
          <p>GPA: 8.5/10 | Relevant Coursework: Data Structures, Algorithms, Web Development</p>
        </div>
      </div>

      {/* Skills */}
      <div className="section">
        <h2>🛠️ Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Languages</h4>
            <ul>
              <li>React</li>
              <li>JavaScript </li>
              <li>HTML5 & CSS3</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Frameworks</h4>
            <ul>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>Python (Tkinter)</li>
              <li>UI/UX</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Tools & Technologies</h4>
            <ul>
              <li>VScode</li>
              <li>Figma</li>
              <li>Jupyter</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="section">
        <h2>💻 Projects</h2>
        <ul>
          <li>
            <strong>Student Management System</strong> – Designed and Implemented a desktop-based systen to manage student records,reducing manual administrative tasks by 60%
          </li>
          <li>
            <strong>Explorer bees</strong> – Developed a resposive travel planning platform with interactive trip customization
          </li>
          <li>
            <strong>Virtual harbal Garden Using Blender</strong> – Designed and visualized a Virtual Herbal Garden using Blender to showcase medicinal plants in an interactive 3D environment.
          </li>
        </ul>
      </div>

      {/* Achievements */}
      <div className="section">
        <h2>🏆 Achievements & Certifications</h2>
        <ul>
          <li>🎯 AI/ML virtual Internship</li>
          <li>🌟 Virtual networking Internship</li>
          <li>📜Reasearch Paper Publication(FASIONISTA:A guide fashion application, published in IRJMETS(2025))</li>
          <li>🥇 Recognized for "Special Achievements" by DYPCET(2025)</li>
        </ul>
      </div>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://github.com/dikshamagdum15" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/diksha-magdum-3a7932278" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  );
};

export default Resume;
