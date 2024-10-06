import React, { useState, useEffect } from "react";
import "../styles/LessonPlans.css"; // Import any custom CSS
import { getLessonPlans, createLessonPlan, updateLessonPlan, deleteLessonPlan } from "../services/lessonPlanService";

const LessonPlans = () => {
  // State to manage lectures
  const [lectures, setLectures] = useState([]);
  const [newLecture, setNewLecture] = useState({ title: "", description: "" });
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Fetch lectures from backend on component mount
  useEffect(() => {
    const fetchLectures = async () => {
      const data = await getLessonPlans();
      setLectures(data);
    };
    fetchLectures();
  }, []);

  // Function to handle input change for new lecture form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLecture({ ...newLecture, [name]: value });
  };

  // Function to add or update lecture
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      // Update existing lecture
      const updatedLecture = await updateLessonPlan(lectures[editIndex].id, newLecture);
      const updatedLectures = lectures.map((lecture, index) =>
        index === editIndex ? updatedLecture : lecture
      );
      setLectures(updatedLectures);
      setEditMode(false);
    } else {
      // Add new lecture
      const addedLecture = await createLessonPlan(newLecture);
      setLectures([...lectures, addedLecture]);
    }
    // Reset form
    setNewLecture({ title: "", description: "" });
  };

  // Function to delete a lecture
  const handleDelete = async (index) => {
    await deleteLessonPlan(lectures[index].id);
    const filteredLectures = lectures.filter((_, i) => i !== index);
    setLectures(filteredLectures);
  };

  // Function to edit a lecture
  const handleEdit = (index) => {
    setNewLecture(lectures[index]);
    setEditIndex(index);
    setEditMode(true);
  };

  return (
    <div className="lesson-plans">
      <h2>Lesson Plans</h2>

      {/* Form to add or update a lecture */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Lecture Title</label>
          <input
            type="text"
            name="title"
            value={newLecture.title}
            onChange={handleInputChange}
            placeholder="Enter lecture title"
            required
          />
        </div>
        <div>
          <label htmlFor="description">Lecture Description</label>
          <textarea
            name="description"
            value={newLecture.description}
            onChange={handleInputChange}
            placeholder="Enter lecture description"
            required
          ></textarea>
        </div>
        <button type="submit">
          {editMode ? "Update Lecture" : "Add Lecture"}
        </button>
      </form>

      {/* Display list of lectures */}
      <ul className="lecture-list">
        {lectures.length > 0 ? (
          lectures.map((lecture, index) => (
            <li key={index}>
              <h3>{lecture.title}</h3>
              <p>{lecture.description}</p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No lectures added yet.</p>
        )}
      </ul>
    </div>
  );
};

export default LessonPlans;
