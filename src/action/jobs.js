import * as api from "../api/index.js";
import { AUTH, START_LOADING, END_LOADING } from "../constants/actionType.js";

export const postJobs = (jobPost) => async (dispatch) => {
  try {
    const { data } = await api.PostJobs(jobPost);
    console.log(data);
    dispatch({ type: "JOBPOST", data });
  } catch (error) {
    console.log(error);
  }
};

export const getJobsPost = () => async (dispatch) => {
  try {
    const { data } = await api.GetJobsPost();

    dispatch({ type: "GETJOBSPOSTS", data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteJobPost = (index) => async (dispatch) => {
  try {
    await api.DeleteJobPost(index);
  } catch (error) {
    console.log(error);
  }
};

export const saveItemFunc = (savedObject) => async (dispatch) => {
  try {
    await api.SaveItemFunc(savedObject);
  } catch (error) {
    if (error) {
      const data = error.response.data.message;
      dispatch({ type: "JOBERROR", data });
    }
  }
};

export const getApplyJobs = (id, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.GetApplyJobs(id);
    dispatch({ type: "APPLYJOBS", data });
    dispatch({ type: END_LOADING });
    navigate(`/account/applyjobs/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const getApplyFunc = (savedObject) => async (dispatch) => {
  try {
    await api.GetApplyFunc(savedObject);

    // navigate("/account/savedItem");
  } catch (error) {
    if (error) {
      const data = error.response.data.message;
      dispatch({ type: "JOBERROR", data });
    }
  }
};

export const getPostBySearch = (search, navigate) => async (dispatch) => {
  console.log(search);
  try {
    const { data } = await api.GetPostBySearch(search);
    console.log(data);
    dispatch({ type: "SEARCHJOB", data });
    navigate(
      `/jobs/getSearchPost?searchInput=${search.searchInput || "none"} `
    );
  } catch (error) {
    console.log(error);
    // const data = error.response.data.message;
    // dispatch({ type: "JOBERROR", data });
  }
};

export const getViewItemPage = (id, navigate) => async (dispatch) => {
  console.log(id);
  try {
    const { data } = await api.GetViewItemPage(id);
    dispatch({ type: "INDIVIDUALJOBS", data });
    navigate(`/jobs/vieweditemPage/${data.posts._id}`);
  } catch (error) {
    console.log(error);
  }
};
