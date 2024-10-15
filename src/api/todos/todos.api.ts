import axiosInstance from "../config/axios/axiosinstance";

export const getTodos = async () => {
  const { data } = await axiosInstance.get("todos");
  return data;
};
