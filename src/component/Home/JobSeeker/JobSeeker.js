import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeNavbar from "../../HomeNavbar/HomeNavbar";
import JobSeekerBody from "./JobSeekerBody/JobSeekerBody";

const JobSeeker = ({ search, setSearch }) => {
  return (
    <div>
      <JobSeekerBody search={search} setSearch={setSearch} />
    </div>
  );
};

export default JobSeeker;
