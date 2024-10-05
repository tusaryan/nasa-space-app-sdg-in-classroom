// src/pages/AddLessonForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AddLessonForm.css';

//v4 2:34 am

const AddLessonForm = ({ onClose, lesson }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    link: '',
    lectureDate: '',
    lectureTime: '',
    lectureBy: '',
    themeLink: ''
  });

  useEffect(() => {
    if (lesson) {
      setFormData(lesson);
    }
  }, [lesson]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = lesson
      ? axios.put(`http://localhost:8081/api/lesson-plan/${lesson.id}`, formData)
      : axios.post('http://localhost:8081/api/lesson-plan', formData);

    request
      .then(response => {
        console.log('Lesson saved:', response.data);
        onClose();
      })
      .catch(error => {
        console.error('There was an error saving the lesson!', error);
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
          <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
          <input type="number" name="duration" value={formData.duration} onChange={handleChange} placeholder="Duration" required />
          <input type="text" name="link" value={formData.link} onChange={handleChange} placeholder="Link" required />
          <input type="date" name="lectureDate" value={formData.lectureDate} onChange={handleChange} required />
          <input type="time" name="lectureTime" value={formData.lectureTime} onChange={handleChange} required />
          <input type="text" name="lectureBy" value={formData.lectureBy} onChange={handleChange} placeholder="Lecture By" required />
          <input type="text" name="themeLink" value={formData.themeLink} onChange={handleChange} placeholder="Theme Link" required />
          <button type="submit">{lesson ? 'Update' : 'Add'} Lesson</button>
        </form>
      </div>
    </div>
  );
};

export default AddLessonForm;







//v3 1:56 am

// src/pages/AddLessonForm.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AddLessonForm.css';

// const AddLessonForm = ({ onClose, lesson }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     duration: '',
//     link: '',
//     lectureDate: '',
//     lectureTime: ''
//   });

//   useEffect(() => {
//     if (lesson) {
//       setFormData(lesson);
//     }
//   }, [lesson]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const request = lesson
//       ? axios.put(`http://localhost:8081/api/lesson-plan/${lesson.id}`, formData)
//       : axios.post('http://localhost:8081/api/lesson-plan', formData);

//     request
//       .then(response => {
//         console.log('Lesson saved:', response.data);
//         onClose();
//       })
//       .catch(error => {
//         console.error('There was an error saving the lesson!', error);
//       });
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>&times;</span>
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
//           <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
//           <input type="number" name="duration" value={formData.duration} onChange={handleChange} placeholder="Duration" required />
//           <input type="text" name="link" value={formData.link} onChange={handleChange} placeholder="Link" required />
//           <input type="date" name="lectureDate" value={formData.lectureDate} onChange={handleChange} required />
//           <input type="time" name="lectureTime" value={formData.lectureTime} onChange={handleChange} required />
//           <button type="submit">{lesson ? 'Update' : 'Add'} Lesson</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddLessonForm;








//v2

// src/pages/AddLessonForm.js
// import React, { useState } from 'react';
// import axios from 'axios';


// const AddLessonForm = ({ onClose }) => {
//   const [lesson, setLesson] = useState({
//     title: '',
//     description: '',
//     duration: '',
//     link: '',
//     lectureDate: '',
//     lectureTime: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLesson({ ...lesson, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8081/api/lesson-plan', lesson)
//       .then(response => {
//         console.log('Lesson added:', response.data);
//         onClose();
//       })
//       .catch(error => {
//         console.error('There was an error adding the lesson!', error);
//       });
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>&times;</span>
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="title" value={lesson.title} onChange={handleChange} placeholder="Title" required />
//           <input type="text" name="description" value={lesson.description} onChange={handleChange} placeholder="Description" required />
//           <input type="number" name="duration" value={lesson.duration} onChange={handleChange} placeholder="Duration" required />
//           <input type="text" name="link" value={lesson.link} onChange={handleChange} placeholder="Link" required />
//           <input type="date" name="lectureDate" value={lesson.lectureDate} onChange={handleChange} required />
//           <input type="time" name="lectureTime" value={lesson.lectureTime} onChange={handleChange} required />
//           <button type="submit">Add Lesson</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddLessonForm;










//v1

// const AddLessonForm = ({ onAddLesson }) => {
//   const [lesson, setLesson] = useState({
//     title: '',
//     description: '',
//     duration: '',
//     link: '',
//     lectureDate: '',
//     lectureTime: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLesson({ ...lesson, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8081/api/lesson-plan', lesson)
//       .then(response => {
//         console.log('Lesson added:', response.data);
//         onAddLesson(); // Refresh the lesson list
//       })
//       .catch(error => {
//         console.error('There was an error adding the lesson!', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="title" value={lesson.title} onChange={handleChange} placeholder="Title" required />
//       <input type="text" name="description" value={lesson.description} onChange={handleChange} placeholder="Description" required />
//       <input type="number" name="duration" value={lesson.duration} onChange={handleChange} placeholder="Duration" required />
//       <input type="text" name="link" value={lesson.link} onChange={handleChange} placeholder="Link" required />
//       <input type="date" name="lectureDate" value={lesson.lectureDate} onChange={handleChange} required />
//       <input type="time" name="lectureTime" value={lesson.lectureTime} onChange={handleChange} required />
//       <button type="submit">Add Lesson</button>
//     </form>
//   );
// };

// export default AddLessonForm;