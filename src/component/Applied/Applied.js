import React, { useState, useEffect } from "react";
import * as Style from "../Home/Employer/EmployerBody/style";
import * as Styling from "./style";
import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";

const Applied = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [changeField, setChangeField] = useState(false);
  const { authData, isLoading, savedItem } = useSelector((state) => state.auth);

  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("applyjobs"))
  );
  // const id = authData?.result._id || user?.result._id;
  // dispatch(getProfileData(id));
  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("applyjobs")));
  }, []);

  console.log(user, isLoading);
  return (
    <Style.Employer>
      <Style.Employer_ListOfJobs>
        <Style.Employer_ListOfJobsContainer>
          {user?.result.ApplySavedJobs.map((val, index) => {
            return (
              <Style.Employer_ListOfJobsInnerBoxSide>
                <Style.Employer_ListOfJobsInnerBoxRoleAndEdit>
                  <Style.Employer_ListOfJobsInnerBoxRole>
                    <Style.Employer_ListOfJobsInnerBoxImgContainer>
                      <Style.Employer_ListOfJobsInnerBoxImg
                        src={require("../../image/Logo.png")}
                        alt="img"
                      />
                    </Style.Employer_ListOfJobsInnerBoxImgContainer>
                    <Style.Employer_ListOfJobsInnerBoxRoleDiv>
                      <Style.Employer_ListOfJobsInnerHeadText>
                        {val.jobRole}
                      </Style.Employer_ListOfJobsInnerHeadText>
                      <Style.Employer_ListOfJobsInnerSubText>
                        {val.jobLocation}: {val.CityOfJob}
                      </Style.Employer_ListOfJobsInnerSubText>
                    </Style.Employer_ListOfJobsInnerBoxRoleDiv>
                  </Style.Employer_ListOfJobsInnerBoxRole>
                </Style.Employer_ListOfJobsInnerBoxRoleAndEdit>
                <Style.Employer_ListOfJobsInnerBoxDescription>
                  {val.jobDescription}
                </Style.Employer_ListOfJobsInnerBoxDescription>
                <Style.Employer_ListOfJobsTypeAndPayDescription>
                  <Style.Employer_ListOfJobsTypeAndPayDescriptionInnerDiv>
                    <Style.Employer_ListOfJobsTypeAndPayDescriptionInnerIndividualDiv>
                      <AiOutlineClockCircle />
                      <Style.Employer_ListOfJobsInnerMiddleText>
                        {val.WorkType}
                      </Style.Employer_ListOfJobsInnerMiddleText>
                    </Style.Employer_ListOfJobsTypeAndPayDescriptionInnerIndividualDiv>

                    <Style.Employer_ListOfJobsTypeAndPayDescriptionInnerIndividualDiv>
                      <MdOutlineAttachMoney />
                      <Style.Employer_ListOfJobsInnerMiddleText>
                        {val.jobPay}
                      </Style.Employer_ListOfJobsInnerMiddleText>
                    </Style.Employer_ListOfJobsTypeAndPayDescriptionInnerIndividualDiv>
                  </Style.Employer_ListOfJobsTypeAndPayDescriptionInnerDiv>
                  <Style.Employer_ListOfJobsTypeAndPayDescriptionInnerDiv>
                    <Style.Employer_ListOfJobsInnerAvailuableIndividualDiv>
                      <Style.Employer_ListOfJobsInnerAvailuableIndividualText>
                        {val.WorkType}
                      </Style.Employer_ListOfJobsInnerAvailuableIndividualText>
                      <Style.Employer_ListOfJobsInnerAvailuableIndividualText>
                        {val.EmploymentType}
                      </Style.Employer_ListOfJobsInnerAvailuableIndividualText>
                      <Style.Employer_ListOfJobsInnerAvailuableIndividualText>
                        {val.ExperienceLevel}
                      </Style.Employer_ListOfJobsInnerAvailuableIndividualText>
                    </Style.Employer_ListOfJobsInnerAvailuableIndividualDiv>
                  </Style.Employer_ListOfJobsTypeAndPayDescriptionInnerDiv>
                </Style.Employer_ListOfJobsTypeAndPayDescription>
              </Style.Employer_ListOfJobsInnerBoxSide>
            );
          })}
        </Style.Employer_ListOfJobsContainer>
      </Style.Employer_ListOfJobs>
    </Style.Employer>
  );
};

export default Applied;
