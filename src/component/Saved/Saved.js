import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import SavedBody from "./SavedBody";
import HomeNavbar from "../HomeNavbar/HomeNavbar";

const Saved = ({ search, setField }) => {
  return (
    <>
      <SavedBody />
    </>
  );
};

export default Saved;
