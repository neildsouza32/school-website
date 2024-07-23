import React from 'react';
import './faculty.css';
import pp from './pp.jpg';

const facultyMembers = [
  {
    name: 'Dr. John Smith',
    position: 'Principal',
    bio: 'Experienced educator with over 20 years in educational leadership.',
    photo: pp,
  },
  {
    name: 'Ms. Sarah Johnson',
    position: 'Mathematics Teacher',
    bio: 'Passionate teacher with a love for mathematics and innovative teaching methods.',
    photo: pp,
  },
  {
    name: 'Mr. David Brown',
    position: 'Science Teacher',
    bio: 'Science enthusiast who inspires students through hands-on experiments.',
    photo: pp,
  },
  {
    name: 'Dr. Emily Davis',
    position: 'English Teacher',
    bio: 'Literature expert who fosters a love for reading and writing.',
    photo: pp,
  },
  {
    name: 'Mr. Michael Wilson',
    position: 'History Teacher',
    bio: 'Dedicated to bringing history to life through engaging storytelling.',
    photo: pp,
  },
  {
    name: 'Ms. Laura Martinez',
    position: 'Art Teacher',
    bio: 'Encourages creativity and artistic expression through various mediums.',
    photo: pp,
  },
];

const Faculty = () => {
  return (
    <div className="faculty">
      <h2>Meet Our Faculty</h2>
      <div className="faculty-list">
        {facultyMembers.map((member, index) => (
          <div className="faculty-card" key={index}>
            <img src={member.photo} alt={member.name} className="profile-photo" />
            <div className="faculty-details">
              <h3>{member.name}</h3>
              <h4>{member.position}</h4>
              <p>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
