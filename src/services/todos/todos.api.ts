import axiosInstance from "../../api/config/axios/axiosinstance";

// This is just an example; you can use services to write business logic (BL). For instance, if you want to add functionality to render a PDF on your web page, you know that this will require a lot of business logic. Writing that directly in the same JSX/TSX file is not a good practice. Instead, you can create a class called PdfGenerate and write all the related methods in it.

export const getTodos = async () => {
  const { data } = await axiosInstance.get("todos");
  return data;
};
