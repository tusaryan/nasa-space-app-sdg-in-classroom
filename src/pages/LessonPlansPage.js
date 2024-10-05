
import React, { useState } from 'react';
import '../styles/LessonPlansPage.css';

const LessonPlansPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [lectures, setLectures] = useState([]);
  const [currentLecture, setCurrentLecture] = useState({ title: '', description: '' });

  const handleAddLecture = () => {
    setLectures([...lectures, currentLecture]);
    setCurrentLecture({ title: '', description: '' });
    setShowModal(false);
  };

  const handleDeleteLecture = (index) => {
    const newLectures = lectures.filter((_, i) => i !== index);
    setLectures(newLectures);
  };

  const handleEditLecture = (index) => {
    setCurrentLecture(lectures[index]);
    handleDeleteLecture(index);
    setShowModal(true);
  };

  return (
    <div className="lesson-plans-page">
      <h2>Lesson Plans</h2>
      <div className="lecture-grid">
        {lectures.map((lecture, index) => (
          <div className="lecture-card" key={index}>
            <h3>{lecture.title}</h3>
            <p>{lecture.description}</p>
            <div className="lecture-actions">
              <button onClick={() => handleEditLecture(index)}>Edit</button>
              <button onClick={() => handleDeleteLecture(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <button className="add-lecture-button" onClick={() => setShowModal(true)}>+</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Add/Edit Lecture</h2>
            <input
              type="text"
              placeholder="Title"
              value={currentLecture.title}
              onChange={(e) => setCurrentLecture({ ...currentLecture, title: e.target.value })}
            />
            <textarea
              placeholder="Description"
              value={currentLecture.description}
              onChange={(e) => setCurrentLecture({ ...currentLecture, description: e.target.value })}
            ></textarea>
            <button onClick={handleAddLecture}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonPlansPage;















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
//       <ul>
//         {lectures.map((lecture, index) => (
//           <li key={index}>
//             <h3>{lecture.title}</h3>
//             <p>{lecture.description}</p>
//             <button onClick={() => handleEditLecture(index)}>Edit</button>
//             <button onClick={() => handleDeleteLecture(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
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