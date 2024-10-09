
import axios from 'axios';

// const API_URL = 'https://nasa-space-app-438018.el.r.appspot.com/api/lesson-plan';
const API_URL = 'http://localhost:8080/api/lesson-plan';


// export const getLessonPlans = async () => {
//     try {
//         const response = await axios.get(API_URL);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching lesson plans:', error);
//         throw error;
//     }
// };

// export const getLessonPlanById = async (id) => {
//     try {
//         const response = await axios.get(`${API_URL}/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error(`Error fetching lesson plan with id ${id}:`, error);
//         throw error;
//     }
// };

// export const createLessonPlan = async (lessonPlan) => {
//     try {
//         const response = await axios.post(API_URL, lessonPlan);
//         return response.data;
//     } catch (error) {
//         console.error('Error creating lesson plan:', error);
//         throw error;
//     }
// };

// export const deleteLessonPlan = async (id) => {
//     try {
//         await axios.delete(`${API_URL}/${id}`);
//     } catch (error) {
//         console.error(`Error deleting lesson plan with id ${id}:`, error);
//         throw error;
//     }
// };




export const getLessonPlans = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getLessonPlanById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createLessonPlan = async (lessonPlan) => {
    const response = await axios.post(API_URL, lessonPlan);
    return response.data;
};

export const deleteLessonPlan = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};