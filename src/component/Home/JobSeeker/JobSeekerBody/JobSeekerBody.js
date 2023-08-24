import React, { useState, useEffect } from "react";
import * as Style from "./style";
import * as Styling from "../../Employer/EmployerBody/style";
//import * as Style from "../../Employer/EmployerBody/style";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  BsBookmark,
  BsFillBookmarkFill,
  BsFillTrash3Fill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { country_list } from "../../../../ListOfCountries";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import {
  getJobsPost,
  getPostBySearch,
  getViewItemPage,
  saveItemFunc,
} from "../../../../action/jobs";
import { CiSaveDown2 } from "react-icons/ci";

const JobSeekerBody = ({ search, setSearch }) => {
  const [showItem, setShowItem] = useState(false);
  const [showItemId, setShowItemId] = useState(null);
  const [saveItemToggle, setSaveItemToggle] = useState(true);
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("jobs"))
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allJobsData, jobsError } = useSelector((state) => state.jobs);
  const { authData } = useSelector((state) => state.auth);
  console.log(authData, jobsError);

  const job_type = ["remote", "on-site", "hybrid"];
  const job_method = ["full time", "part time", "internship", "contract"];
  const salary_Range = [
    "0$-100",
    "101$-1000",
    "10001$-5000",
    "5001$-10000",
    "10001+",
  ];
  const experience_Range = ["entry/junior Level", "mid level", "senior level"];

  useEffect(() => {
    dispatch(getJobsPost());
    setUser(JSON.parse(window.localStorage.getItem("jobs")));
  }, []);

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

  const handleSearchItem = () => {
    if (search.searchInput) {
      dispatch(getPostBySearch(search, navigate));
    }
  };

  console.log(search);

  const handleViewItemPage = (id) => {
    console.log(id);
    dispatch(getViewItemPage(id, navigate));
  };

  return (
    <Style.HomeBody>
      <Style.HomeBody_Navbar>
        <Style.HomeBody_Select
          select
          onChange={(e) =>
            setSearch({
              ...search,
              searchLocation: e.target.value,
            })
          }
          value={search.searchLocation}
          required
          name="searchLocation"
        >
          <Style.HomeBody_Option selected="true">
            Select Location
          </Style.HomeBody_Option>

          {country_list.map((data, index) => (
            <Style.HomeBody_Option key={index}>{data}</Style.HomeBody_Option>
          ))}
        </Style.HomeBody_Select>

        <Style.HomeBody_Select
          onChange={(e) =>
            setSearch({
              ...search,
              searchJobType: e.target.value,
            })
          }
          value={search.searchJobType}
          select
          required
          name="searchJobType"
        >
          <Style.HomeBody_Option selected="true">
            Job Type
          </Style.HomeBody_Option>

          {job_type.map((data, index) => (
            <Style.HomeBody_Option key={index}>{data}</Style.HomeBody_Option>
          ))}
        </Style.HomeBody_Select>

        <Style.HomeBody_Select
          select
          onChange={(e) =>
            setSearch({
              ...search,
              searchJobMethod: e.target.value,
            })
          }
          value={search.searchJobMethod}
          required
          name="searchJobMethod"
        >
          <Style.HomeBody_Option selected="true">
            Job Method
          </Style.HomeBody_Option>

          {job_method.map((data, index) => (
            <Style.HomeBody_Option key={index}>{data}</Style.HomeBody_Option>
          ))}
        </Style.HomeBody_Select>

        <Style.HomeBody_Select
          onChange={(e) =>
            setSearch({
              ...search,
              searchSalaryRange: e.target.value,
            })
          }
          value={search.searchSalaryRange}
          select
          required
          name="searchSalaryRange"
        >
          <Style.HomeBody_Option selected="true">
            Salary Range
          </Style.HomeBody_Option>

          {salary_Range.map((data, index) => (
            <Style.HomeBody_Option key={index}>{data}$</Style.HomeBody_Option>
          ))}
        </Style.HomeBody_Select>

        <Style.HomeBody_Select
          select
          onChange={(e) =>
            setSearch({
              ...search,
              searchExperience: e.target.value,
            })
          }
          value={search.searchExperience}
          required
          name="searchExperience"
        >
          <Style.HomeBody_Option selected="true">
            Experience
          </Style.HomeBody_Option>

          {experience_Range.map((data, index) => (
            <Style.HomeBody_Option key={index}>{data}</Style.HomeBody_Option>
          ))}
        </Style.HomeBody_Select>

        <Style.HomeBody_SearchButton
          onClick={handleSearchItem}
          variant="contained"
        >
          search job
        </Style.HomeBody_SearchButton>
      </Style.HomeBody_Navbar>

      {jobsError != null && (
        <Style.HomeBody_ListOfJobsInnerHeadText
          style={{
            color: "green",
            width: "100%",
            textAlign: "center",
          }}
        >
          {jobsError}
        </Style.HomeBody_ListOfJobsInnerHeadText>
      )}

      {allJobsData?.posts.length > 0 && (
        <Style.HomeBody_ListOfJobsContainer>
          {allJobsData?.posts.map((val, index) => {
            return (
              <Style.HomeBody_ListOfJobsInnerBox>
                <Style.HomeBody_ListOfJobsInnerBoxRoleAndEdit>
                  <Style.HomeBody_ListOfJobsInnerBoxRole>
                    <Style.HomeBody_ListOfJobsInnerBoxImgContainer>
                      <Style.HomeBody_ListOfJobsInnerBoxImg
                        src={require("../../../../image/Logo.png")}
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
                  {val._id == showItemId && jobsError == null ? (
                    <Style.HomeBody_ListOfJobsInnerBoxAndEdit
                      onClick={() => handleSaveItem(val)}
                    >
                      <BsFillBookmarkFill style={{ color: "blue" }} />

                      <Style.HomeBody_ListOfJobsInnerMiddleTextSAve>
                        save job
                      </Style.HomeBody_ListOfJobsInnerMiddleTextSAve>
                    </Style.HomeBody_ListOfJobsInnerBoxAndEdit>
                  ) : (
                    <Style.HomeBody_ListOfJobsInnerBoxAndEdit
                      onClick={() => handleSaveItem(val)}
                    >
                      <BsFillBookmarkFill />

                      <Style.HomeBody_ListOfJobsInnerMiddleTextSAve>
                        save job
                      </Style.HomeBody_ListOfJobsInnerMiddleTextSAve>
                    </Style.HomeBody_ListOfJobsInnerBoxAndEdit>
                  )}
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
                  <Style.HomeBody_ListOfJobsInnerPostButton
                    onClick={() => handleViewItemPage(val._id)}
                    variant="contained"
                  >
                    View
                  </Style.HomeBody_ListOfJobsInnerPostButton>
                </Style.HomeBody_ListOfJobsTypeAndPayDescription>
              </Style.HomeBody_ListOfJobsInnerBox>
            );
          })}
        </Style.HomeBody_ListOfJobsContainer>
      )}

      {!allJobsData?.posts.length > 0 && (
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

export default JobSeekerBody;
