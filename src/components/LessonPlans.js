import React, { useState, useEffect } from "react";
import '../styles/LessonPlans.css';
import LessonCard from './LessonCard';
import { getLessonPlans } from "../services/lessonPlanService";
import LoadingSpinner from './LoadingSpinner'; //New component, see below.


const LessonPlans = () => {
  const [lectures, setLectures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const data = await getLessonPlans();
        setLectures(data);
      } catch (error) {
        console.error('Error fetching lectures:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLectures();
  }, []);

  return (
    <div className="lesson-plans">
      <h2>Lesson Plans</h2>
      {isLoading ? (
        <LoadingSpinner /> //Display Loading animation
      ) : (
        <div className="lecture-grid">
          {lectures.map((lecture) => (
            <LessonCard key={lecture.id} lecture={lecture} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LessonPlans;







//v2 12:14 10 oct


// import React, { useState, useEffect } from "react";
// import "../styles/LessonPlans.css"; // Import any custom CSS
// import { getLessonPlans, createLessonPlan, updateLessonPlan, deleteLessonPlan } from "../services/lessonPlanService";

// // import React, { useState, useEffect } from 'react';
// // import { getLessonPlans, createLessonPlan, updateLessonPlan, deleteLessonPlan } from '../services/lessonPlanService';

// const LessonPlans = () => {
//   const [lectures, setLectures] = useState([]);
//   const [newLecture, setNewLecture] = useState({ title: "", description: "" });
//   const [editMode, setEditMode] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   useEffect(() => {
//     const fetchLectures = async () => {
//       try {
//         const data = await getLessonPlans();
//         setLectures(data);
//       } catch (error) {
//         console.error('Error fetching lectures:', error);
//       }
//     };
//     fetchLectures();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewLecture({ ...newLecture, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editMode) {
//         const updatedLecture = await updateLessonPlan(lectures[editIndex].id, newLecture);
//         const updatedLectures = lectures.map((lecture, index) =>
//           index === editIndex ? updatedLecture : lecture
//         );
//         setLectures(updatedLectures);
//         setEditMode(false);
//       } else {
//         const addedLecture = await createLessonPlan(newLecture);
//         setLectures([...lectures, addedLecture]);
//       }
//       setNewLecture({ title: "", description: "" });
//     } catch (error) {
//       console.error('Error submitting lecture:', error);
//     }
//   };

//   const handleDelete = async (index) => {
//     try {
//       await deleteLessonPlan(lectures[index].id);
//       const filteredLectures = lectures.filter((_, i) => i !== index);
//       setLectures(filteredLectures);
//     } catch (error) {
//       console.error('Error deleting lecture:', error);
//     }
//   };

//   const handleEdit = (index) => {
//     setNewLecture(lectures[index]);
//     setEditIndex(index);
//     setEditMode(true);
//   };

//   return (
//     <div className="lesson-plans">
//       <h2>Lesson Plans</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title">Lecture Title</label>
//           <input
//             type="text"
//             name="title"
//             value={newLecture.title}
//             onChange={handleInputChange}
//             placeholder="Enter lecture title"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="description">Lecture Description</label>
//           <textarea
//             name="description"
//             value={newLecture.description}
//             onChange={handleInputChange}
//             placeholder="Enter lecture description"
//             required
//           ></textarea>
//         </div>
//         <button type="submit">
//           {editMode ? "Update Lecture" : "Add Lecture"}
//         </button>
//       </form>
//       <ul className="lecture-list">
//         {lectures.length > 0 ? (
//           lectures.map((lecture, index) => (
//             <li key={index}>
//               <h3>{lecture.title}</h3>
//               <p>{lecture.description}</p>
//               <button onClick={() => handleEdit(index)}>Edit</button>
//               <button onClick={() => handleDelete(index)}>Delete</button>
//             </li>
//           ))
//         ) : (
//           <p>No lectures added yet.</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default LessonPlans;







//v1

// const LessonPlans = () => {
//   // State to manage lectures
//   const [lectures, setLectures] = useState([]);
//   const [newLecture, setNewLecture] = useState({ title: "", description: "" });
//   const [editMode, setEditMode] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   // Fetch lectures from backend on component mount
//   useEffect(() => {
//     const fetchLectures = async () => {
//       const data = await getLessonPlans();
//       setLectures(data);
//     };
//     fetchLectures();
//   }, []);

//   // Function to handle input change for new lecture form
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewLecture({ ...newLecture, [name]: value });
//   };

//   // Function to add or update lecture
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (editMode) {
//       // Update existing lecture
//       const updatedLecture = await updateLessonPlan(lectures[editIndex].id, newLecture);
//       const updatedLectures = lectures.map((lecture, index) =>
//         index === editIndex ? updatedLecture : lecture
//       );
//       setLectures(updatedLectures);
//       setEditMode(false);
//     } else {
//       // Add new lecture
//       const addedLecture = await createLessonPlan(newLecture);
//       setLectures([...lectures, addedLecture]);
//     }
//     // Reset form
//     setNewLecture({ title: "", description: "" });
//   };

//   // Function to delete a lecture
//   const handleDelete = async (index) => {
//     await deleteLessonPlan(lectures[index].id);
//     const filteredLectures = lectures.filter((_, i) => i !== index);
//     setLectures(filteredLectures);
//   };

//   // Function to edit a lecture
//   const handleEdit = (index) => {
//     setNewLecture(lectures[index]);
//     setEditIndex(index);
//     setEditMode(true);
//   };

//   return (
//     <div className="lesson-plans">
//       <h2>Lesson Plans</h2>

//       {/* Form to add or update a lecture */}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title">Lecture Title</label>
//           <input
//             type="text"
//             name="title"
//             value={newLecture.title}
//             onChange={handleInputChange}
//             placeholder="Enter lecture title"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="description">Lecture Description</label>
//           <textarea
//             name="description"
//             value={newLecture.description}
//             onChange={handleInputChange}
//             placeholder="Enter lecture description"
//             required
//           ></textarea>
//         </div>
//         <button type="submit">
//           {editMode ? "Update Lecture" : "Add Lecture"}
//         </button>
//       </form>

//       {/* Display list of lectures */}
//       <ul className="lecture-list">
//         {lectures.length > 0 ? (
//           lectures.map((lecture, index) => (
//             <li key={index}>
//               <h3>{lecture.title}</h3>
//               <p>{lecture.description}</p>
//               <button onClick={() => handleEdit(index)}>Edit</button>
//               <button onClick={() => handleDelete(index)}>Delete</button>
//             </li>
//           ))
//         ) : (
//           <p>No lectures added yet.</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default LessonPlans;
