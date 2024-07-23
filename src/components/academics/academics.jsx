import React from 'react';
import './academics.css';

const Academics = () => {
  return (
    <div className="academics">
      <h2>Our Academic Curriculum</h2>
      
      <div className="content">
        <div className="left-section">
          <div className="timeline-container">
            <section>
              <h3>Curriculum by Education Level</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <h4 className="timeline-title">Primary Education (Grades 1-5)</h4>
                  <p className="timeline-description">English, Mathematics, Science, Social Studies, Art, Physical Education</p>
                </div>
                <div className="timeline-item important-date">
                  <h4 className="timeline-title">Secondary Education (Grades 6-10)</h4>
                  <p className="timeline-description">English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
                </div>
                <div className="timeline-item">
                  <h4 className="timeline-title">Senior Secondary Education (Grades 11-12)</h4>
                  <p className="timeline-description">
                    <strong>Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English<br></br>
                    <strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, English
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        
        <div className="right-section">
          <section>
            <h3>Curriculum Overview</h3>
            <p>Our curriculum is designed to provide a well-rounded education and prepare students for their future academic and career endeavors. Here's an overview of the subjects and methodologies we offer:</p>
          </section>
          
          <section>
            <h3>Teaching Methodologies</h3>
            <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
          </section>
          
          <section>
            <h3>Educational Resources</h3>
            <p>Our educational resources include digital classrooms, interactive learning modules, and access to online educational platforms.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Academics;
