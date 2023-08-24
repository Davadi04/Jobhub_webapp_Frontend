import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { AiOutlineCheck } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { FinalsignUp, customerSignUp } from "../../action/auth";
import { useDispatch, useSelector } from "react-redux";
import { country_list } from "../../ListOfCountries";
import JobSeekerCompleteProfile from "./JobSeeker/JobSeekerCompleteProfile";
import EmployerCompleteProfile from "./Employer/EmployerCompleteProfile";

const ProfileCompletion = () => {
  const { authData, isLoading } = useSelector((state) => state.auth);
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("profile"))
  );

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("profile")));
  }, [isLoading]);

  return (
    <>
      {user?.result.CompanyRepresentative && <EmployerCompleteProfile />}

      {!user?.result.CompanyRepresentative && <JobSeekerCompleteProfile />}
    </>
  );
};

export default ProfileCompletion;
