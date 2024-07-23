import React from 'react';
import './students.css';

const Students = () => {
  return (
    <div className="students">
      <h2>Student's Section</h2>
      <section className="student-life">
        <h3>Life at Springdale</h3>
        <div className="activities">
          <h4><u>Extracurricular Activities</u></h4>
          <p>Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club</p>
        </div>
        <div className="clubs">
          <h4><u>Clubs and Societies</u></h4>
          <p>Literary Society, Environmental Club, Astronomy Club, Coding Club</p>
        </div>
      </section>
      <div className="achievements-student-council">
        <div className="achievements-container">
          <section className="achievements">
            <h3><u>Achievements</u></h3>
            <div className="achievement">
              <p><strong>John Smith</strong> - National Level Math Olympiad Winner</p>
            </div>
            <div className="achievement">
              <p><strong>Sarah Lee</strong> - Gold Medalist in State Swimming Championship</p>
            </div>
            <div className="achievement">
              <p><strong>Tech Innovators Club</strong> - Winners of Inter-School Robotics Competition</p>
            </div>
          </section>
        </div>
        <div className="student-council-container">
          <section className="student-council">
            <h3><u>Student Council</u></h3>
            <div className="council-member">
              <p><strong>President:</strong> Amy Parker, Grade 12</p>
            </div>
            <div className="council-member">
              <p><strong>Vice President:</strong> Rajiv Mehta, Grade 11</p>
            </div>
            <div className="council-member">
              <p><strong>Secretary:</strong> Lisa Wong, Grade 10</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Students;
