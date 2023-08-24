import React, { useState, useEffect } from "react";
import * as Style from "../Home/JobSeeker/JobSeekerBody/style";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsFillBookmarkFill, BsFillTrash3Fill } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { getJobsPost, saveItemFunc } from "../../action/jobs";

const SearchPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showItemId, setShowItemId] = useState(null);

  const { searchJobs, jobsError } = useSelector((state) => state.jobs);
  // if (!savedItem) return null;
  const { authData } = useSelector((state) => state.auth);

  const handleSaveItem = (val) => {
    setShowItemId(val._id);

    const savedObject = {
      ...val,
      saveditem: true,
      email: authData?.result.email,
      userId: authData?.result._id,
    };
    console.log(savedObject);

    dispatch(saveItemFunc(savedObject));
    dispatch(getJobsPost());
  };
  console.log(searchJobs);
  return (
    <Style.HomeBody>
      {searchJobs?.posts.length > 0 && (
        <Style.HomeBody_ListOfJobsContainer>
          {searchJobs?.posts.map((val, index) => {
            return (
              <Style.HomeBody_ListOfJobsInnerBox>
                <Style.HomeBody_ListOfJobsInnerBoxRoleAndEdit>
                  <Style.HomeBody_ListOfJobsInnerBoxRole>
                    <Style.HomeBody_ListOfJobsInnerBoxImgContainer>
                      <Style.HomeBody_ListOfJobsInnerBoxImg
                        src={require("../../image/Logo.png")}
                        alt="img"
                      />
                    </Style.HomeBody_ListOfJobsInnerBoxImgContainer>
                    <Style.HomeBody_ListOfJobsInnerBoxRoleDiv>
                      <Style.HomeBody_ListOfJobsInnerHeadText>
                        {val.jobRole}
                      </Style.HomeBody_ListOfJobsInnerHeadText>
                      <Style.HomeBody_ListOfJobsInnerSubText>
                        {val.jobLocation}: {val.CityOfJob}
                      </Style.HomeBody_ListOfJobsInnerSubText>
                    </Style.HomeBody_ListOfJobsInnerBoxRoleDiv>
                  </Style.HomeBody_ListOfJobsInnerBoxRole>
                </Style.HomeBody_ListOfJobsInnerBoxRoleAndEdit>
                <Style.HomeBody_ListOfJobsInnerBoxDescription>
                  {val.jobDescription}
                </Style.HomeBody_ListOfJobsInnerBoxDescription>
                <Style.HomeBody_ListOfJobsTypeAndPayDescription>
                  <Style.HomeBody_ListOfJobsTypeAndPayDescriptionInnerDiv>
                    <Style.HomeBody_ListOfJobsTypeAndPayDescriptionInnerIndividualDiv>
                      <AiOutlineClockCircle />
                      <Style.HomeBody_ListOfJobsInnerMiddleText>
                        {val.WorkType}
                      </Style.HomeBody_ListOfJobsInnerMiddleText>
                    </Style.HomeBody_ListOfJobsTypeAndPayDescriptionInnerIndividualDiv>

                    <Style.HomeBody_ListOfJobsTypeAndPayDescriptionInnerIndividualDiv>
                      <MdOutlineAttachMoney />
                      <Style.HomeBody_ListOfJobsInnerMiddleText>
                        {val.jobPay}
                      </Style.HomeBody_ListOfJobsInnerMiddleText>
                    </Style.HomeBody_ListOfJobsTypeAndPayDescriptionInnerIndividualDiv>
                  </Style.HomeBody_ListOfJobsTypeAndPayDescriptionInnerDiv>
                  <Style.HomeBody_ListOfJobsTypeAndPayDescriptionInnerDiv>
                    <Style.HomeBody_ListOfJobsInnerAvailuableIndividualDiv>
                      <Style.HomeBody_ListOfJobsInnerAvailuableIndividualText>
                        {val.WorkType}
                      </Style.HomeBody_ListOfJobsInnerAvailuableIndividualText>
                      <Style.HomeBody_ListOfJobsInnerAvailuableIndividualText>
                        {val.EmploymentType}
                      </Style.HomeBody_ListOfJobsInnerAvailuableIndividualText>
                      <Style.HomeBody_ListOfJobsInnerAvailuableIndividualText>
                        {val.ExperienceLevel}
                      </Style.HomeBody_ListOfJobsInnerAvailuableIndividualText>
                    </Style.HomeBody_ListOfJobsInnerAvailuableIndividualDiv>
                  </Style.HomeBody_ListOfJobsTypeAndPayDescriptionInnerDiv>
                  <Style.HomeBody_ListOfJobsInnerPostButton variant="contained">
                    View
                  </Style.HomeBody_ListOfJobsInnerPostButton>
                </Style.HomeBody_ListOfJobsTypeAndPayDescription>
              </Style.HomeBody_ListOfJobsInnerBox>
            );
          })}
        </Style.HomeBody_ListOfJobsContainer>
      )}

      {!searchJobs?.posts.length > 0 && (
        <Style.HomeBody_NoJobContainer>
          <Style.HomeBody_NoJobContainerDiv>
            <Style.HomeBody_NoJobContainerDivPara>
              No Job Post
            </Style.HomeBody_NoJobContainerDivPara>
            <Style.HomeBody_NoJobContainerDivIconHolder>
              <BsFillTrash3Fill />
            </Style.HomeBody_NoJobContainerDivIconHolder>
          </Style.HomeBody_NoJobContainerDiv>
        </Style.HomeBody_NoJobContainer>
      )}
    </Style.HomeBody>
  );
};

export default SearchPost;
