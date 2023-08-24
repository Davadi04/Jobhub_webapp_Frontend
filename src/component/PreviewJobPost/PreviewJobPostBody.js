import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const PreviewJobPostBody = ({ jobPost }) => {
  console.log(jobPost.name);
  return (
    <Style.PreviewJobPost>
      <Style.PreviewJobPost_Container>
        <Style.PreviewJobPost_ContainerBox>
          <Style.PreviewJobPost_ContainerRoleAndLocationBox>
            <Style.PreviewJobPost_ContainerRoleBox>
              <Style.PreviewJobPost_ContainerImgBox>
                <Style.PreviewJobPost_ContainerImg
                  src={require("../../image/Logomark.png")}
                  alt="img"
                />
              </Style.PreviewJobPost_ContainerImgBox>
              <Style.PreviewJobPost_ContainerRoleTextBox>
                <Style.PreviewJobPost_ContainerRoleText></Style.PreviewJobPost_ContainerRoleText>
                <Style.PreviewJobPost_ContainerLocationBoxText>
                  {jobPost.jobRole}
                </Style.PreviewJobPost_ContainerLocationBoxText>
              </Style.PreviewJobPost_ContainerRoleTextBox>
            </Style.PreviewJobPost_ContainerRoleBox>
            <Style.PreviewJobPost_ContainerLocationBox>
              <Style.PreviewJobPost_ContainerLocationBoxText>
                {jobPost.CityOfJob} , {jobPost.jobLocation}
              </Style.PreviewJobPost_ContainerLocationBoxText>
            </Style.PreviewJobPost_ContainerLocationBox>
          </Style.PreviewJobPost_ContainerRoleAndLocationBox>
          <Style.PreviewJobPost_ContainerTypeandDateBox>
            <Style.PreviewJobPost_ContainerPayText>
              Company : {jobPost.name}
            </Style.PreviewJobPost_ContainerPayText>

            <Style.PreviewJobPost_ContainerTypeBox>
              <Style.PreviewJobPost_ContainerIndividualTypeBox>
                {jobPost.WorkType}
              </Style.PreviewJobPost_ContainerIndividualTypeBox>
              <Style.PreviewJobPost_ContainerIndividualTypeBox>
                {jobPost.EmploymentType}
              </Style.PreviewJobPost_ContainerIndividualTypeBox>
              <Style.PreviewJobPost_ContainerIndividualTypeBox>
                {jobPost.ExperienceLevel}
              </Style.PreviewJobPost_ContainerIndividualTypeBox>
            </Style.PreviewJobPost_ContainerTypeBox>
          </Style.PreviewJobPost_ContainerTypeandDateBox>
          <Style.PreviewJobPost_ContainerSalaryBoxText>
            Renumeration : {jobPost.jobPay}
          </Style.PreviewJobPost_ContainerSalaryBoxText>

          <Style.PreviewJobPost_ContainerMainRestVariablesBox>
            <Style.PreviewJobPost_ContainerRoleText>
              Job Summary
            </Style.PreviewJobPost_ContainerRoleText>
            <Style.PreviewJobPost_ContainerMainText>
              {jobPost.jobSummary}
            </Style.PreviewJobPost_ContainerMainText>
          </Style.PreviewJobPost_ContainerMainRestVariablesBox>

          <Style.PreviewJobPost_ContainerMainRestVariablesBox>
            <Style.PreviewJobPost_ContainerRoleText>
              Job Description
            </Style.PreviewJobPost_ContainerRoleText>
            <Style.PreviewJobPost_ContainerMainText>
              {jobPost.jobDescription}
            </Style.PreviewJobPost_ContainerMainText>
          </Style.PreviewJobPost_ContainerMainRestVariablesBox>

          <Style.PreviewJobPost_ContainerMainRestVariablesBox>
            <Style.PreviewJobPost_ContainerRoleText>
              Job Requirement
            </Style.PreviewJobPost_ContainerRoleText>
            <Style.PreviewJobPost_ContainerMainText>
              {jobPost.jobRequirement}
            </Style.PreviewJobPost_ContainerMainText>
          </Style.PreviewJobPost_ContainerMainRestVariablesBox>

          <Style.PreviewJobPost_ContainerMainRestVariablesBox>
            <Style.PreviewJobPost_ContainerRoleText>
              Soft Skills
            </Style.PreviewJobPost_ContainerRoleText>
            <Style.PreviewJobPost_ContainerMainText>
              {jobPost.softSkills}
            </Style.PreviewJobPost_ContainerMainText>
          </Style.PreviewJobPost_ContainerMainRestVariablesBox>
        </Style.PreviewJobPost_ContainerBox>
      </Style.PreviewJobPost_Container>
    </Style.PreviewJobPost>
  );
};

export default PreviewJobPostBody;
