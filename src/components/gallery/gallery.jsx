import React, { useState } from 'react';
import sportsDay from './sports_day.jpg';
import scienceExhibition from './science_exhibition.jpg';
import CulFest from './cutural_fest.jpg';
import library from './library.jpg';
import classroom from './classroom.jpg';
import './gallery.css';
import video from './vdeo.mkv'

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const photos = [
    { src: sportsDay, description: 'Students participating in various sports events.', type: 'event' },
    { src: scienceExhibition, description: 'Students presenting their science projects.', type: 'event' },
    { src: CulFest, description: 'Students performing in the cultural fest.', type: 'event' },
    { src: classroom, description: 'A glimpse of our interactive classrooms.', type: 'infrastructure' },
    { src: library, description: 'Students reading and studying in the school library.', type: 'infrastructure' },
  ];

  const videos = [
    { src: video, description: 'Virtual tour of Springdale Public School.', type: 'infrastructure' },
    { src: video, description: 'Highlights from the Annual Function 2023.', type: 'event' },
  ];

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredPhotos = filter === 'all' ? photos : photos.filter(photo => photo.type === filter);
  const filteredVideos = filter === 'all' ? videos : videos.filter(video => video.type === filter);

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="filter">
        <label htmlFor="filter">Filter by:</label>
        <select id="filter" onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="event">Events</option>
          <option value="infrastructure">Infrastructure</option>
        </select>
      </div>
      <div className="gallery-content">
        <div className="photo-gallery">
          <h3>Photos</h3>
          <div className="photos">
            {filteredPhotos.map((photo, index) => (
              <div className="photo" key={index}>
                <img src={photo.src} alt={photo.description} />
                <p>{photo.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="video-gallery">
          <h3>Videos</h3>
          <div className="videos">
            {filteredVideos.map((video, index) => (
              <div className="video" key={index}>
                <video controls>
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
