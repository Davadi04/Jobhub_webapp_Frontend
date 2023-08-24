import axios from "axios";

const API = axios.create({ baseURL: "https://jobhub-mern-app.onrender.com" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const GetPostBySearch = (search) =>
  API.get(`/jobs/getSearchPost?searchInput=${search.searchInput || "none"}
`);

//export const GetProfileHomeData = (id) => API.get(`/account/homeData/${id}`);

export const GetProfileData = (id) => API.get(`/account/home/${id}`);

export const GetApplyJobs = (id) => API.get(`/account/applyjobs/${id}`);

export const GetJobsPost = () => API.get(`/jobs/getPosts`);
export const signIn = (profileField) =>
  API.post(`/account/signIn`, profileField);
export const employersignUp = (profileField) =>
  API.post(`/account/employer/signUp`, profileField);
export const PostJobs = (jobPost) => API.post(`/jobs/post`, jobPost);
export const customersignUp = (profileField) =>
  API.post(`/account/customer/signUp`, profileField);
export const finalSignUp = (profileField) =>
  API.post(`/account/finalSetup`, profileField);
export const editProfile = (profileField) =>
  API.patch(`/account/accountsetting/${profileField.id}`, profileField);
export const editPassword = (profileField) =>
  API.patch(`/account/security/${profileField.id}`, profileField);
export const verifyEmail = (id) => API.get(`/account/${id}/verify`);
export const DeleteAccount = (id) => API.delete(`/account/delete/${id}`);
export const DeleteJobPost = (index) => API.delete(`/jobs/delete/${index}`);

export const DeleteSavedItem = (dataItem) =>
  API.post(`/jobs/itemSaved/${dataItem.userId}`, dataItem);

export const SaveItemFunc = (savedObject) =>
  API.post(`/jobs/saveItem`, savedObject);

export const GetApplyFunc = (savedObject) =>
  API.post(`/jobs/applyItem`, savedObject);

export const GetViewItemPage = (id) => API.get(`/jobs/vieweditemPage/${id}`);
