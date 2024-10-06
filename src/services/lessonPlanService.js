
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/lesson-plan';

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