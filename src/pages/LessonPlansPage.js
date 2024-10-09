
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddLessonForm from './AddLessonForm';
import '../styles/LessonPlansPage.css';

// const API_URL = 'https://nasa-space-app-438018.el.r.appspot.com/api/lesson-plan';
const API_URL = 'http://localhost:8080/api/lesson-plan';

const LessonPlansPage = () => {
  const [lessons, setLessons] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editLesson, setEditLesson] = useState(null);

  const fetchLessons = () => {
    // axios.get('http://localhost:8081/api/lesson-plan')
    axios.get(`${API_URL}`)
      .then(response => {
        setLessons(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the lesson plans!', error);
      });
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  const handleAddLesson = () => {
    setShowModal(true);
    setEditLesson(null);
  };

  const handleEditLesson = (lesson) => {
    setShowModal(true);
    setEditLesson(lesson);
  };

  const handleDeleteLesson = (id) => {
    // axios.delete(`http://localhost:8081/api/lesson-plan/${id}`)
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        fetchLessons();
      })
      .catch(error => {
        console.error('There was an error deleting the lesson!', error);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    fetchLessons();
  };

  return (
    <div>
      <h1>Lesson Plans</h1>
      <div className="lesson-cards">
        {lessons.map(lesson => (
          <div key={lesson.id} className="lesson-card">
            <div className="lesson-line"></div>
            <div className="lesson-content">
              <h2>{lesson.title}</h2>
              <p>{lesson.description}</p>
              <p>Duration: {lesson.duration} minutes</p>
              <p>Date: {lesson.lectureDate}</p>
              <p>Time: {lesson.lectureTime}</p>
              <p>Lecture By: {lesson.lectureBy}</p>
              <a href={lesson.link}>Lesson Link</a>
              <img src={lesson.themeLink} alt="Theme" className="theme-image" />
              <button onClick={() => handleEditLesson(lesson)}>Edit</button>
              <button onClick={() => handleDeleteLesson(lesson.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <button className="add-lesson-button" onClick={handleAddLesson}>+</button>
      {showModal && <AddLessonForm onClose={handleCloseModal} lesson={editLesson} />}
    </div>
  );
};

export default LessonPlansPage;
