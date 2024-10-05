
import React, { useEffect, useState } from 'react';
// import '../styles/LessonPlansPage.css';
import axios from 'axios';
import AddLessonForm from './AddLessonForm';
import '../styles/LessonPlansPage.css';


//v5 2:36 am

const LessonPlansPage = () => {
  const [lessons, setLessons] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editLesson, setEditLesson] = useState(null);

  const fetchLessons = () => {
    axios.get('http://localhost:8081/api/lesson-plan')
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
    axios.delete(`http://localhost:8081/api/lesson-plan/${id}`)
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













//v4 1:54am

// src/pages/LessonPlansPage.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AddLessonForm from './AddLessonForm';
// import './LessonPlansPage.css';

// const LessonPlansPage = () => {
//   const [lessons, setLessons] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [editLesson, setEditLesson] = useState(null);

//   const fetchLessons = () => {
//     axios.get('http://localhost:8081/api/lesson-plan')
//       .then(response => {
//         setLessons(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the lesson plans!', error);
//       });
//   };

//   useEffect(() => {
//     fetchLessons();
//   }, []);

//   const handleAddLesson = () => {
//     setShowModal(true);
//     setEditLesson(null);
//   };

//   const handleEditLesson = (lesson) => {
//     setShowModal(true);
//     setEditLesson(lesson);
//   };

//   const handleDeleteLesson = (id) => {
//     axios.delete(`http://localhost:8081/api/lesson-plan/${id}`)
//       .then(() => {
//         fetchLessons();
//       })
//       .catch(error => {
//         console.error('There was an error deleting the lesson!', error);
//       });
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     fetchLessons();
//   };

//   return (
//     <div>
//       <h1>Lesson Plans</h1>
//       <div className="lesson-cards">
//         {lessons.map(lesson => (
//           <div key={lesson.id} className="lesson-card">
//             <div className="lesson-line"></div>
//             <div className="lesson-content">
//               <h2>{lesson.title}</h2>
//               <p>{lesson.description}</p>
//               <p>Duration: {lesson.duration} minutes</p>
//               <p>Date: {lesson.lectureDate}</p>
//               <p>Time: {lesson.lectureTime}</p>
//               <a href={lesson.link}>Lesson Link</a>
//               <button onClick={() => handleEditLesson(lesson)}>Edit</button>
//               <button onClick={() => handleDeleteLesson(lesson.id)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="add-lesson-button" onClick={handleAddLesson}>+</button>
//       {showModal && <AddLessonForm onClose={handleCloseModal} lesson={editLesson} />}
//     </div>
//   );
// };

// export default LessonPlansPage;








//v3

// const LessonPlansPage = () => {
//   const [lessons, setLessons] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const fetchLessons = () => {
//     axios.get('http://localhost:8081/api/lesson-plan')
//       .then(response => {
//         setLessons(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the lesson plans!', error);
//       });
//   };

//   useEffect(() => {
//     fetchLessons();
//   }, []);

//   const handleAddLesson = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     fetchLessons();
//   };

//   return (
//     <div>
//       <h1>Lesson Plans</h1>
//       <div className="lesson-cards">
//         {lessons.map(lesson => (
//           <div key={lesson.id} className="lesson-card">
//             <div className="lesson-line"></div>
//             <div className="lesson-content">
//               <h2>{lesson.title}</h2>
//               <p>{lesson.description}</p>
//               <p>Duration: {lesson.duration} minutes</p>
//               <p>Date: {lesson.lectureDate}</p>
//               <p>Time: {lesson.lectureTime}</p>
//               <a href={lesson.link}>Lesson Link</a>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="add-lesson-button" onClick={handleAddLesson}>+</button>
//       {showModal && <AddLessonForm onClose={handleCloseModal} />}
//     </div>
//   );
// };

// export default LessonPlansPage;







//v2

// const LessonPlansPage = () => {
//   const [lessons, setLessons] = useState([]);

//   const fetchLessons = () => {
//     axios.get('http://localhost:8081/api/lesson-plan')
//       .then(response => {
//         setLessons(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the lesson plans!', error);
//       });
//   };

//   useEffect(() => {
//     fetchLessons();
//   }, []);

//   return (
//     <div>
//       <h1>Lesson Plans</h1>
//       <AddLessonForm onAddLesson={fetchLessons} />
//       <div className="lesson-cards">
//         {lessons.map(lesson => (
//           <div key={lesson.id} className="lesson-card">
//             <h2>{lesson.title}</h2>
//             <p>{lesson.description}</p>
//             <p>Duration: {lesson.duration} minutes</p>
//             <p>Date: {lesson.lectureDate}</p>
//             <p>Time: {lesson.lectureTime}</p>
//             <a href={lesson.link}>Lesson Link</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LessonPlansPage;






//v1

// const LessonPlansPage = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [lectures, setLectures] = useState([]);
//   const [currentLecture, setCurrentLecture] = useState({
//     title: '',
//     description: '',
//     date: '',
//     time: '',
//     duration: '',
//     link: ''
//   });

//   const handleAddLecture = () => {
//     setLectures([...lectures, currentLecture]);
//     setCurrentLecture({
//       title: '',
//       description: '',
//       date: '',
//       time: '',
//       duration: '',
//       link: ''
//     });
//     setShowModal(false);
//   };

//   const handleDeleteLecture = (index) => {
//     const newLectures = lectures.filter((_, i) => i !== index);
//     setLectures(newLectures);
//   };

//   const handleEditLecture = (index) => {
//     setCurrentLecture(lectures[index]);
//     handleDeleteLecture(index);
//     setShowModal(true);
//   };

//   return (
//     <div className="lesson-plans-page">
//       <h2>Lesson Plans</h2>
//       <div className="lecture-grid">
//         {lectures.map((lecture, index) => (
//           <div className="lecture-card" key={index}>
//             <h3>{lecture.title}</h3>
//             <p>{lecture.description}</p>
//             <p>Date: {lecture.date}</p>
//             <p>Time: {lecture.time}</p>
//             <p>Duration: {lecture.duration}</p>
//             <a href={lecture.link} target="_blank" rel="noopener noreferrer">Join Lecture</a>
//             <div className="lecture-actions">
//               <button onClick={() => handleEditLecture(index)}>Edit</button>
//               <button onClick={() => handleDeleteLecture(index)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="add-lecture-button" onClick={() => setShowModal(true)}>+</button>
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={() => setShowModal(false)}>&times;</span>
//             <h2>Add/Edit Lecture</h2>
//             <input
//               type="text"
//               placeholder="Title"
//               value={currentLecture.title}
//               onChange={(e) => setCurrentLecture({ ...currentLecture, title: e.target.value })}
//             />
//             <textarea
//               placeholder="Description (optional)"
//               value={currentLecture.description}
//               onChange={(e) => setCurrentLecture({ ...currentLecture, description: e.target.value })}
//             ></textarea>
//             <input
//               type="date"
//               placeholder="Date"
//               value={currentLecture.date}
//               onChange={(e) => setCurrentLecture({ ...currentLecture, date: e.target.value })}
//             />
//             <input
//               type="time"
//               placeholder="Time"
//               value={currentLecture.time}
//               onChange={(e) => setCurrentLecture({ ...currentLecture, time: e.target.value })}
//             />
//             <input
//               type="text"
//               placeholder="Duration"
//               value={currentLecture.duration}
//               onChange={(e) => setCurrentLecture({ ...currentLecture, duration: e.target.value })}
//             />
//             <input
//               type="url"
//               placeholder="Link"
//               value={currentLecture.link}
//               onChange={(e) => setCurrentLecture({ ...currentLecture, link: e.target.value })}
//             />
//             <button onClick={handleAddLecture}>Save</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LessonPlansPage;







// import React, { useState } from 'react';
// import '../styles/LessonPlansPage.css';

// const LessonPlansPage = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [lectures, setLectures] = useState([]);
//   const [currentLecture, setCurrentLecture] = useState({ title: '', description: '' });

//   const handleAddLecture = () => {
//     setLectures([...lectures, currentLecture]);
//     setCurrentLecture({ title: '', description: '' });
//     setShowModal(false);
//   };

//   const handleDeleteLecture = (index) => {
//     const newLectures = lectures.filter((_, i) => i !== index);
//     setLectures(newLectures);
//   };

//   const handleEditLecture = (index) => {
//     setCurrentLecture(lectures[index]);
//     handleDeleteLecture(index);
//     setShowModal(true);
//   };

//   return (
//     <div className="lesson-plans-page">
//       <h2>Lesson Plans</h2>
//       <div className="lecture-grid">
//         {lectures.map((lecture, index) => (
//           <div className="lecture-card" key={index}>
//             <h3>{lecture.title}</h3>
//             <p>{lecture.description}</p>
//             <div className="lecture-actions">
//               <button onClick={() => handleEditLecture(index)}>Edit</button>
//               <button onClick={() => handleDeleteLecture(index)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="add-lecture-button" onClick={() => setShowModal(true)}>+</button>
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={() => setShowModal(false)}>&times;</span>
//             <h2>Add/Edit Lecture</h2>
//             <input
//               type="text"
//               placeholder="Title"
//               value={currentLecture.title}
//               onChange={(e) => setCurrentLecture({ ...currentLecture, title: e.target.value })}
//             />
//             <textarea
//               placeholder="Description"
//               value={currentLecture.description}
//               onChange={(e) => setCurrentLecture({ ...currentLecture, description: e.target.value })}
//             ></textarea>
//             <button onClick={handleAddLecture}>Save</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LessonPlansPage;



// // import React, { useState } from 'react';
// // import '../styles/LessonPlansPage.css';

// // const LessonPlansPage = () => {
// //   const [showModal, setShowModal] = useState(false);
// //   const [lectures, setLectures] = useState([]);
// //   const [currentLecture, setCurrentLecture] = useState({ title: '', description: '' });

// //   const handleAddLecture = () => {
// //     setLectures([...lectures, currentLecture]);
// //     setCurrentLecture({ title: '', description: '' });
// //     setShowModal(false);
// //   };

// //   const handleDeleteLecture = (index) => {
// //     const newLectures = lectures.filter((_, i) => i !== index);
// //     setLectures(newLectures);
// //   };

// //   const handleEditLecture = (index) => {
// //     setCurrentLecture(lectures[index]);
// //     handleDeleteLecture(index);
// //     setShowModal(true);
// //   };

// //   return (
// //     <div className="lesson-plans-page">
// //       <h2>Lesson Plans</h2>
// //       <div className="lecture-grid">
// //         {lectures.map((lecture, index) => (
// //           <div className="lecture-card" key={index}>
// //             <h3>{lecture.title}</h3>
// //             <p>{lecture.description}</p>
// //             <div className="lecture-actions">
// //               <button onClick={() => handleEditLecture(index)}>Edit</button>
// //               <button onClick={() => handleDeleteLecture(index)}>Delete</button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <button className="add-lecture-button" onClick={() => setShowModal(true)}>+</button>
// //       {showModal && (
// //         <div className="modal">
// //           <div className="modal-content">
// //             <span className="close" onClick={() => setShowModal(false)}>&times;</span>
// //             <h2>Add/Edit Lecture</h2>
// //             <input
// //               type="text"
// //               placeholder="Title"
// //               value={currentLecture.title}
// //               onChange={(e) => setCurrentLecture({ ...currentLecture, title: e.target.value })}
// //             />
// //             <textarea
// //               placeholder="Description"
// //               value={currentLecture.description}
// //               onChange={(e) => setCurrentLecture({ ...currentLecture, description: e.target.value })}
// //             ></textarea>
// //             <button onClick={handleAddLecture}>Save</button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default LessonPlansPage;















// // // import React, { useState } from 'react';
// // // import '../styles/LessonPlansPage.css';

// // // const LessonPlansPage = () => {
// // //   const [showModal, setShowModal] = useState(false);
// // //   const [lectures, setLectures] = useState([]);
// // //   const [currentLecture, setCurrentLecture] = useState({ title: '', description: '' });

// // //   const handleAddLecture = () => {
// // //     setLectures([...lectures, currentLecture]);
// // //     setCurrentLecture({ title: '', description: '' });
// // //     setShowModal(false);
// // //   };

// // //   const handleDeleteLecture = (index) => {
// // //     const newLectures = lectures.filter((_, i) => i !== index);
// // //     setLectures(newLectures);
// // //   };

// // //   const handleEditLecture = (index) => {
// // //     setCurrentLecture(lectures[index]);
// // //     handleDeleteLecture(index);
// // //     setShowModal(true);
// // //   };

// // //   return (
// // //     <div className="lesson-plans-page">
// // //       <h2>Lesson Plans</h2>
// // //       <ul>
// // //         {lectures.map((lecture, index) => (
// // //           <li key={index}>
// // //             <h3>{lecture.title}</h3>
// // //             <p>{lecture.description}</p>
// // //             <button onClick={() => handleEditLecture(index)}>Edit</button>
// // //             <button onClick={() => handleDeleteLecture(index)}>Delete</button>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //       <button className="add-lecture-button" onClick={() => setShowModal(true)}>+</button>
// // //       {showModal && (
// // //         <div className="modal">
// // //           <div className="modal-content">
// // //             <span className="close" onClick={() => setShowModal(false)}>&times;</span>
// // //             <h2>Add/Edit Lecture</h2>
// // //             <input
// // //               type="text"
// // //               placeholder="Title"
// // //               value={currentLecture.title}
// // //               onChange={(e) => setCurrentLecture({ ...currentLecture, title: e.target.value })}
// // //             />
// // //             <textarea
// // //               placeholder="Description"
// // //               value={currentLecture.description}
// // //               onChange={(e) => setCurrentLecture({ ...currentLecture, description: e.target.value })}
// // //             ></textarea>
// // //             <button onClick={handleAddLecture}>Save</button>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default LessonPlansPage;