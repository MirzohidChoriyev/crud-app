import axios from "axios";

//Crud api
export const url = "http://localhost:3003/questions";

export const getQuestions = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};

export const addQuestions = async (object) => {
  return await axios.post(url, object);
};

export const deleteQuestion = async (id) => {
  return await axios.delete(`${url}/${id}`);
};

export const editQuestions = async (id, object) => {
  return await axios.put(`${url}/${id}`, object);
};
