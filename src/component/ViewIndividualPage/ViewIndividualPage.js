import React, { useState, useEffect } from "react";
import * as Style from "./style";
import * as JobStyle from "../Home/JobSeeker/JobSeekerBody/style";
import * as CareerStyle from "../NavBarProfile/CareerProfile/style";
import * as AccountStyle from "../NavBarProfile/AccountSetting/style";
import * as VerifyScreenStyle from "../VerifyScreen/style";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";
import { getApplyFunc, getJobsPost, saveItemFunc } from "../../action/jobs";

const ViewIndividualPage = ({ field }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { individualJobs } = useSelector((state) => state.jobs);
  const { authData } = useSelector((state) => state.auth);

  const [showItem, setShowItem] = useState("ApplyHomePage");
  const [chooseCv, setChooseCv] = useState(null);

  const handleSaveItem = () => {
    const savedObject = {
      ...individualJobs.posts,
      saveditem: true,
      email: authData?.result.email,
      userId: authData?.result._id,
    };
    console.log(savedObject, "see");

    dispatch(saveItemFunc(savedObject));
    dispatch(getJobsPost());
  };

  const handleApplyFunc = () => {
    const savedObject = {
      ...individualJobs.posts,
      saveditem: true,
      email: authData?.result.email,
      userId: authData?.result._id,
    };
    console.log(savedObject, "see");
    setChooseCv(null);
    setShowItem("ApplyPopUp");
  };

  const handleProceed = () => {
    if (chooseCv) {
      setShowItem("ApplyPage");
    }
  };

  const handleApplyButton = () => {
    const savedObject = {
      ...individualJobs.posts,
      field: field,
      userId: authData?.result._id,
    };

    dispatch(getApplyFunc(savedObject));

    setShowItem("Proceed");
  };
  const handlePopUpButton = () => {
    navigate(`/account/accountsetting/${individualJobs.posts.userId}`);
  };
  return (
    <Style.ViewIndividualPage>
      {showItem == "ApplyHomePage" && (
        <Style.ViewIndividualPageContainer>
          <Style.VerifyScreenFirstContainer>
            <Style.VerifyScreenFirstContainerBoxRoleAndEdit>
              <JobStyle.HomeBody_ListOfJobsInnerBoxRole>
                <JobStyle.HomeBody_ListOfJobsInnerBoxImgContainer>
                  <JobStyle.HomeBody_ListOfJobsInnerBoxImg
                    src={require("../../image/Logo.png")}
                    alt="img"
                  />
                </JobStyle.HomeBody_ListOfJobsInnerBoxImgContainer>
                <JobStyle.HomeBody_ListOfJobsInnerBoxRoleDiv>
                  <JobStyle.HomeBody_ListOfJobsInnerHeadText>
                    {individualJobs.posts.jobRole}
                  </JobStyle.HomeBody_ListOfJobsInnerHeadText>
                  <JobStyle.HomeBody_ListOfJobsInnerSubText>
                    {individualJobs.posts.jobLocation} :{" "}
                    {individualJobs.posts.CityOfJob}
                  </JobStyle.HomeBody_ListOfJobsInnerSubText>
                </JobStyle.HomeBody_ListOfJobsInnerBoxRoleDiv>
              </JobStyle.HomeBody_ListOfJobsInnerBoxRole>
            </Style.VerifyScreenFirstContainerBoxRoleAndEdit>

            <JobStyle.HomeBody_ListOfJobsTypeAndPayDescriptionInnerDiv>
              <JobStyle.HomeBody_ListOfJobsTypeAndPayDescriptionInnerIndividualDiv>
                <AiOutlineClockCircle />
                <JobStyle.HomeBody_ListOfJobsInnerMiddleText>
                  {individualJobs.posts.WorkType}
                </JobStyle.HomeBody_ListOfJobsInnerMiddleText>
              </JobStyle.HomeBody_ListOfJobsTypeAndPayDescriptionInnerIndividualDiv>
            </JobStyle.HomeBody_ListOfJobsTypeAndPayDescriptionInnerDiv>
            <JobStyle.HomeBody_ListOfJobsTypeAndPayDescriptionInnerDiv>
              <JobStyle.HomeBody_ListOfJobsInnerAvailuableIndividualDiv>
                <JobStyle.HomeBody_ListOfJobsInnerAvailuableIndividualText>
                  {individualJobs.posts.WorkType}
                </JobStyle.HomeBody_ListOfJobsInnerAvailuableIndividualText>
                <JobStyle.HomeBody_ListOfJobsInnerAvailuableIndividualText>
                  {individualJobs.posts.EmploymentType}
                </JobStyle.HomeBody_ListOfJobsInnerAvailuableIndividualText>
                <JobStyle.HomeBody_ListOfJobsInnerAvailuableIndividualText>
                  {individualJobs.posts.ExperienceLevel}
                </JobStyle.HomeBody_ListOfJobsInnerAvailuableIndividualText>
              </JobStyle.HomeBody_ListOfJobsInnerAvailuableIndividualDiv>
            </JobStyle.HomeBody_ListOfJobsTypeAndPayDescriptionInnerDiv>

            <JobStyle.HomeBody_ListOfJobsInnerMiddleText>
              Renumeration : {individualJobs.posts.jobPay}
            </JobStyle.HomeBody_ListOfJobsInnerMiddleText>

            <Style.VerifyScreenFirstContainerMain>
              <Style.VerifyScreenFirstContainerMainDiv>
                <CareerStyle.CareerProfile_ProfileMainItemHeader>
                  Job Summary
                </CareerStyle.CareerProfile_ProfileMainItemHeader>

                <CareerStyle.CareerProfile_ProfileMainItemText>
                  {individualJobs.posts.jobSummary}
                </CareerStyle.CareerProfile_ProfileMainItemText>
              </Style.VerifyScreenFirstContainerMainDiv>

              <Style.VerifyScreenFirstContainerMainDiv>
                <CareerStyle.CareerProfile_ProfileMainItemHeader>
                  Job Description/Responsibilities
                </CareerStyle.CareerProfile_ProfileMainItemHeader>

                <CareerStyle.CareerProfile_ProfileMainItemText>
                  {individualJobs.posts.jobDescription}
                </CareerStyle.CareerProfile_ProfileMainItemText>
              </Style.VerifyScreenFirstContainerMainDiv>

              <Style.VerifyScreenFirstContainerMainDiv>
                <CareerStyle.CareerProfile_ProfileMainItemHeader>
                  Job Requirements
                </CareerStyle.CareerProfile_ProfileMainItemHeader>

                <CareerStyle.CareerProfile_ProfileMainItemText>
                  {individualJobs.posts.jobRequirement}
                </CareerStyle.CareerProfile_ProfileMainItemText>
              </Style.VerifyScreenFirstContainerMainDiv>

              <Style.VerifyScreenFirstContainerMainDiv>
                <CareerStyle.CareerProfile_ProfileMainItemHeader>
                  Core Skills
                </CareerStyle.CareerProfile_ProfileMainItemHeader>

                <CareerStyle.CareerProfile_ProfileMainItemText>
                  {individualJobs.posts.coreSkills}
                </CareerStyle.CareerProfile_ProfileMainItemText>
              </Style.VerifyScreenFirstContainerMainDiv>

              <Style.VerifyScreenFirstContainerMainDiv>
                <CareerStyle.CareerProfile_ProfileMainItemHeader>
                  Soft Skills
                </CareerStyle.CareerProfile_ProfileMainItemHeader>

                <CareerStyle.CareerProfile_ProfileMainItemText>
                  {individualJobs.posts.softSkills}
                </CareerStyle.CareerProfile_ProfileMainItemText>
              </Style.VerifyScreenFirstContainerMainDiv>
            </Style.VerifyScreenFirstContainerMain>
          </Style.VerifyScreenFirstContainer>
          <Style.VerifyScreenSecondContainer>
            <CareerStyle.CareerProfile_ProfileMainItemHeader>
              About
            </CareerStyle.CareerProfile_ProfileMainItemHeader>
            <CareerStyle.CareerProfile_ProfileMainItemText>
              {individualJobs.posts.jobDescription}
            </CareerStyle.CareerProfile_ProfileMainItemText>
            {authData?.result.field == "customer" && (
              <Style.VerifyScreenSecondContainerButtonDiv>
                <Style.VerifyScreenSecondContainerButton
                  onClick={handleApplyFunc}
                  variant="contained"
                >
                  Apply now
                </Style.VerifyScreenSecondContainerButton>
                <Style.VerifyScreenSecondContainerButton
                  onClick={handleSaveItem}
                  variant="outlined"
                >
                  save job
                </Style.VerifyScreenSecondContainerButton>
              </Style.VerifyScreenSecondContainerButtonDiv>
            )}
          </Style.VerifyScreenSecondContainer>
        </Style.ViewIndividualPageContainer>
      )}
      {showItem == "ApplyPopUp" && (
        <Style.ViewIndividualPageApplyPopUp>
          <Style.ViewIndividualPageApplyPopUpDiv>
            <Style.ViewIndividualPageApplyPopUpIconDiv>
              <Style.ViewIndividualPageApplyPopUpIconDivImg
                src={require("../../image/2layers.png")}
                alt="img"
              />
            </Style.ViewIndividualPageApplyPopUpIconDiv>
            <Style.ViewIndividualPageApplyPopUpText>
              Select CV option
            </Style.ViewIndividualPageApplyPopUpText>

            <Style.ViewIndividualPageApplyPopUpButtonDiv>
              <Style.ViewIndividualPageApplyPopUpButton
                className={chooseCv == "Profile" && "selectCvOrApp"}
                onClick={() => setChooseCv("Profile")}
              >
                <Style.ViewIndividualPageApplyPopUpButtonIconDiv>
                  <Style.ViewIndividualPageApplyPopUpIconDivImg
                    src={require("../../image/2layers.png")}
                    alt="img"
                  />
                </Style.ViewIndividualPageApplyPopUpButtonIconDiv>
                <Style.ViewIndividualPageApplyPopUpButtonText>
                  Apply using your JobHub profile
                </Style.ViewIndividualPageApplyPopUpButtonText>
              </Style.ViewIndividualPageApplyPopUpButton>
              <Style.ViewIndividualPageApplyPopUpButton
                className={chooseCv == "Cv" && "selectCvOrApp"}
                onClick={() => setChooseCv("Cv")}
              >
                <Style.ViewIndividualPageApplyPopUpButtonIconDiv>
                  <Style.ViewIndividualPageApplyPopUpIconDivImg
                    src={require("../../image/2layers.png")}
                    alt="img"
                  />
                </Style.ViewIndividualPageApplyPopUpButtonIconDiv>
                <Style.ViewIndividualPageApplyPopUpButtonText>
                  Apply using your saved CV
                </Style.ViewIndividualPageApplyPopUpButtonText>
              </Style.ViewIndividualPageApplyPopUpButton>
            </Style.ViewIndividualPageApplyPopUpButtonDiv>

            <Style.ViewIndividualPageApplyPopUpDeleteDiv>
              <AccountStyle.AccountSetting_PopUpButtonDelete
                onClick={() => setShowItem("ApplyHomePage")}
                variant="outlined"
              >
                Cancel
              </AccountStyle.AccountSetting_PopUpButtonDelete>
              <AccountStyle.AccountSetting_PopUpButtonDelete
                onClick={handleProceed}
                variant="contained"
              >
                Proceed
              </AccountStyle.AccountSetting_PopUpButtonDelete>
            </Style.ViewIndividualPageApplyPopUpDeleteDiv>
          </Style.ViewIndividualPageApplyPopUpDiv>
        </Style.ViewIndividualPageApplyPopUp>
      )}
      {showItem == "ApplyPage" && (
        <Style.ApplyPage>
          <Style.ApplyPageDiv>
            <Style.ApplyPageDivHeader>
              {authData?.result.fullName}
            </Style.ApplyPageDivHeader>
            <Style.ApplyPageDivLinkDiv>
              <Style.ApplyPageDivEmailHeader>
                {authData?.result.email}
              </Style.ApplyPageDivEmailHeader>
              <Style.ApplyPageDivEmailHeader>
                {authData?.result.PhoneNumber}
              </Style.ApplyPageDivEmailHeader>
            </Style.ApplyPageDivLinkDiv>

            <Style.ApplyPageDivLinkDiv>
              <Style.ApplyPageDivEmailHeader>
                {authData?.result.Portfolio}
              </Style.ApplyPageDivEmailHeader>
              <Style.ApplyPageDivEmailHeader>
                {authData?.result.Linkedin}
              </Style.ApplyPageDivEmailHeader>
            </Style.ApplyPageDivLinkDiv>

            <Style.ApplyPageDivMainDiv>
              <CareerStyle.CareerProfile_ProfileMainItemHeader>
                Summary
              </CareerStyle.CareerProfile_ProfileMainItemHeader>

              <CareerStyle.CareerProfile_ProfileMainItemText>
                {authData?.result.Summary}
              </CareerStyle.CareerProfile_ProfileMainItemText>
            </Style.ApplyPageDivMainDiv>

            <Style.ApplyPageDivMainDiv>
              <CareerStyle.CareerProfile_ProfileMainItemHeader>
                Experience
              </CareerStyle.CareerProfile_ProfileMainItemHeader>

              <CareerStyle.CareerProfile_ProfileMainItemText>
                {authData?.result.Experience}
              </CareerStyle.CareerProfile_ProfileMainItemText>
            </Style.ApplyPageDivMainDiv>

            <Style.ApplyPageDivMainDiv>
              <CareerStyle.CareerProfile_ProfileMainItemHeader>
                Education
              </CareerStyle.CareerProfile_ProfileMainItemHeader>

              <CareerStyle.CareerProfile_ProfileMainItemText>
                {authData?.result.Education}
              </CareerStyle.CareerProfile_ProfileMainItemText>
            </Style.ApplyPageDivMainDiv>

            <Style.ApplyPageDivMainDiv>
              <CareerStyle.CareerProfile_ProfileMainItemHeader>
                Skills
              </CareerStyle.CareerProfile_ProfileMainItemHeader>

              <CareerStyle.CareerProfile_ProfileMainItemText>
                {authData?.result.Skills}
              </CareerStyle.CareerProfile_ProfileMainItemText>
            </Style.ApplyPageDivMainDiv>

            <Style.ApplyPageDivMainDiv_IndividualItemButtonDiv>
              <Style.AccountSetting_IndividualItemButton
                onClick={() => setShowItem("ApplyHomePage")}
                variant="outlined"
              >
                cancel
              </Style.AccountSetting_IndividualItemButton>

              <Style.AccountSetting_IndividualItemButton
                onClick={handleApplyButton}
                variant="contained"
              >
                Apply
              </Style.AccountSetting_IndividualItemButton>
            </Style.ApplyPageDivMainDiv_IndividualItemButtonDiv>
          </Style.ApplyPageDiv>
        </Style.ApplyPage>
      )}
      {showItem == "Proceed" && (
        <>
          <VerifyScreenStyle.VerifyScreen>
            <VerifyScreenStyle.VerifyScreen_Container>
              <VerifyScreenStyle.VerifyScreen_Main>
                <VerifyScreenStyle.VerifyScreen_MainIconHolder>
                  <VerifyScreenStyle.VerifyScreen_Icon
                    src={require("../../image/Success.png")}
                    alt="img"
                  />
                </VerifyScreenStyle.VerifyScreen_MainIconHolder>

                <VerifyScreenStyle.VerifyScreen_DescriptionDiv>
                  <VerifyScreenStyle.VerifyScreen_PopUpDescriptionHeader>
                    Application Successful
                  </VerifyScreenStyle.VerifyScreen_PopUpDescriptionHeader>

                  <VerifyScreenStyle.VerifyScreen_PopUpDescriptionSubHeader>
                    You have successfully applied to the role of a
                    {authData?.result.Role}Designer.
                  </VerifyScreenStyle.VerifyScreen_PopUpDescriptionSubHeader>
                </VerifyScreenStyle.VerifyScreen_DescriptionDiv>
              </VerifyScreenStyle.VerifyScreen_Main>

              <VerifyScreenStyle.VerifyScreen_SectionContainerButton
                onClick={handlePopUpButton}
                variant="contained"
              >
                Proceed
              </VerifyScreenStyle.VerifyScreen_SectionContainerButton>
            </VerifyScreenStyle.VerifyScreen_Container>
          </VerifyScreenStyle.VerifyScreen>
        </>
      )}
      {authData?.result.field == "employer" && (
        <Style.Applicants>
          <Style.Applicants_Header>view applicant/cv</Style.Applicants_Header>

          <Style.ApplicantSection>
            {authData?.result.ViewAppliedCV.map((item) => (
              <Style.ApplicantSectionMain>
                <Style.Applicants_Para>
                  Name : {item.fullName}
                </Style.Applicants_Para>
                <Style.Applicants_Para>
                  EMAIL : {item.email}
                </Style.Applicants_Para>
                <Style.Applicants_Para>
                  PhoneNumber : {item.PhoneNumber}
                </Style.Applicants_Para>
                <Style.Applicants_Para>
                  role : Akintan Seyi
                </Style.Applicants_Para>
                <Style.Applicants_Para>
                  Linkedin : {item.Linkedin}
                </Style.Applicants_Para>

                <Style.Applicants_Para>
                  Skills : {item.Skills}
                </Style.Applicants_Para>
                <Style.Applicants_Para>
                  Education : {item.Education}
                </Style.Applicants_Para>
                <Style.Applicants_Para>
                  Experience : {item.Experience}
                </Style.Applicants_Para>
                <Style.Applicants_Para>
                  Portfolio Website : {item.Portfolio}
                </Style.Applicants_Para>
              </Style.ApplicantSectionMain>
            ))}
          </Style.ApplicantSection>
        </Style.Applicants>
      )}
    </Style.ViewIndividualPage>
  );
};
export default ViewIndividualPage;
