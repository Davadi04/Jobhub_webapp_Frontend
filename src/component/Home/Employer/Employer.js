import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeNavbar from "../../HomeNavbar/HomeNavbar";
import EmployerBody from "./EmployerBody/EmployerBody";

const Employer = () => {
  return (
    <>
      <EmployerBody />
    </>
  );
};

export default Employer;
