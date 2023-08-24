import React from "react";
import HomeNavbar from "../HomeNavbar/HomeNavbar";
import PreviewJobPostBody from "./PreviewJobPostBody";

const PreviewJobPost = ({ jobPost }) => {
  return (
    <>
      <PreviewJobPostBody jobPost={jobPost} />
    </>
  );
};

export default PreviewJobPost;
