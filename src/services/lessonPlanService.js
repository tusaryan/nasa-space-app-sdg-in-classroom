import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL_DEVELOPMENT || process.env.REACT_APP_API_URL_PRODUCTION || '';
const API_URL = 'https://nasa-space-app-438018.el.r.appspot.com/api/lesson-plan';

if (!API_URL) {
    console.error("Error: No API URL found in .env file. Please set REACT_APP_API_URL_DEVELOPMENT or REACT_APP_API_URL_PRODUCTION.");
}

export const getLessonPlans = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching lesson plans:', error);
        throw error; // Re-throw to be handled higher up
    }
};

export const getLessonPlanById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`); 
        return response.data;
    } catch (error) {
        console.error(`Error fetching lesson plan with id ${id}:`, error);
        throw error;
    }
};

export const createLessonPlan = async (lessonPlan) => {
    try {
        const response = await axios.post(API_URL, lessonPlan);
        return response.data;
    } catch (error) {
        console.error('Error creating lesson plan:', error);
        throw error;
    }
};

export const deleteLessonPlan = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        return true; // Indicate success
    } catch (error) {
        console.error(`Error deleting lesson plan with id ${id}:`, error);
        throw error;
    }
};





//v2 6:16pm
// import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL_DEVELOPMENT || process.env.REACT_APP_API_URL_PRODUCTION || 'http://localhost:8080/api/lesson-plan'; // Fallback to localhost if not set

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
//         const response = await axios.get(`${API_URL}/${id}`); //Corrected URL construction
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
//         await axios.delete(`${API_URL}/${id}`); //Corrected URL construction
//     } catch (error) {
//         console.error(`Error deleting lesson plan with id ${id}:`, error);
//         throw error;
//     }
// };











//v1 depedency

// import axios from 'axios';

// const API_URL = 'https://nasa-space-app-438018.el.r.appspot.com/api/lesson-plan';
// const API_URL = 'http://localhost:8080/api/lesson-plan';

//v2
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





// v1 working and will be using
// export const getLessonPlans = async () => {
//     const response = await axios.get(API_URL);
//     return response.data;
// };

// export const getLessonPlanById = async (id) => {
//     const response = await axios.get(`${API_URL}/${id}`);
//     return response.data;
// };

// export const createLessonPlan = async (lessonPlan) => {
//     const response = await axios.post(API_URL, lessonPlan);
//     return response.data;
// };

// export const deleteLessonPlan = async (id) => {
//     await axios.delete(`${API_URL}/${id}`);
// };