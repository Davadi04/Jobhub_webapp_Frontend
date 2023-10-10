import { AUTH, START_LOADING, END_LOADING } from "../constants/actionType.js";

import * as api from "../api/index.js";

export const customerSignUp = (profileField, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.customersignUp(profileField);
    dispatch({ type: AUTH, data });
    dispatch({ type: END_LOADING });
    navigate("/account/field/signUp");
  } catch (error) {
    if (error) {
      const data = error?.response?.data.message || null;
      dispatch({ type: "ERROR", data });
    }
  }
};

export const employerSignUp = (profileField, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.employersignUp(profileField);
    dispatch({ type: AUTH, data });
    dispatch({ type: END_LOADING });
    navigate("/account/field/signUp");
  } catch (error) {
    if (error) {
      const data = error?.response?.data.message || null;
      dispatch({ type: "ERROR", data });
    }
  }
};

export const Signin = (profileField, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(profileField);
    dispatch({ type: AUTH, data });

    navigate("/");
    data?.result.bio
      ? navigate(`/account/home/${data?.result._id}`)
      : data?.result.CompanyWebsite
      ? navigate(`/account/home/${data?.result._id}`)
      : navigate("/account/field/signUp");
  } catch (error) {
    if (error) {
      const data = error?.response?.data.message || null;
      dispatch({ type: "ERROR", data });
    }
  }
};

export const getProfileData = (id, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.GetProfileData(id);

    dispatch({ type: "SAVEDITEM", data });
    dispatch({ type: END_LOADING });
    navigate("/account/savedItem");
  } catch (error) {
    console.log(error);
  }
};

export const getProfileById = (id, navigate) => async (dispatch) => {
  console.log(id);
  try {
    // const { data } = await api.GetProfileHomeData(id);
    // console.log(data);
    // dispatch({ type: AUTH, data });
  } catch (error) {
    //  const data = error?.response.data.message || null;
    //  dispatch({ type: "ERROR", data });
  }
};

export const VerifyEmail = (id) => async (dispatch) => {
  try {
    await api.verifyEmail(id);
  } catch (error) {
    console.log(error);
  }
};

export const FinalsignUp = (profileField, navigate) => async (dispatch) => {
  try {
    const { data } = await api.finalSignUp(profileField);
    dispatch({ type: AUTH, data });
    navigate(`/account/home/${data?.result._id}`);
  } catch (error) {
    console.log("mesage");
  }
};
