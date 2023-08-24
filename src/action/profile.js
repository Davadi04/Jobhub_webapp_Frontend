import { AUTH, LOGOUT } from "../constants/actionType.js";

import * as api from "../api/index.js";

export const EditProfile = (profileField) => async (dispatch) => {
  console.log(profileField);
  try {
    const { data } = await api.editProfile(profileField);
    console.log(data);
    dispatch({ type: AUTH, data });
  } catch (error) {
    console.log(error);
  }
};

export const changePassword = (profileField) => async (dispatch) => {
  try {
    const { data } = await api.editPassword(profileField);
    console.log(data);
    dispatch({ type: "MESSAGE", data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAccount = (id, navigate) => async (dispatch) => {
  try {
    await api.DeleteAccount(id);
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
