import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import JobSeeker from "./JobSeeker/JobSeeker";
import Employer from "./Employer/Employer";

const Home = ({ search, setSearch }) => {
  const { authData, isLoading } = useSelector((state) => state.auth);
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("profile"))
  );

  console.log(user);

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("profile")));
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      {user?.result.bio && <JobSeeker search={search} setSearch={setSearch} />}

      {user?.result.CompanyRepresentative && <Employer />}
    </div>
  );
};

export default Home;
