import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  BsCurrencyDollar,
  BsSearch,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { country_list } from "../../../../ListOfCountries";
import {
  deleteJobPost,
  getJobsPost,
  getViewItemPage,
  postJobs,
} from "../../../../action/jobs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";

const EmployerBody = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showBody, setshowBody] = useState("postForm");
  const [showDelete, setShowDelete] = useState(null);
  const [showError, setShowError] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("profile"))
  );
  const { authData } = useSelector((state) => state.auth);
  const { jobsData, allJobsData } = useSelector((state) => state.jobs);

  const jobPostVariable = {
    id: authData?.result._id || user?.result._id,
    name: authData?.result.fullName || user?.result.fullName,
    jobRole: "",
    jobSummary: "",
    EmploymentType: "",
    WorkType: "",
    CityOfJob: "",
    jobLocation: "",
    jobPay: "",
    ExperienceLevel: "",
    jobDescription: "",
    jobRequirement: "",
    coreSkills: "",
    softSkills: "",
    jobEndDate: "",
    numberEmploy: "",
    saveditem: false,
  };

  const [jobPost, setjobPost] = useState(jobPostVariable);

  console.log(jobsData, allJobsData);

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

  const handleSubmitJobPost = () => {
    if (
      jobPost.CityOfJob &&
      jobPost.jobRole &&
      jobPost.EmploymentType &&
      jobPost.WorkType &&
      jobPost.jobSummary &&
      jobPost.ExperienceLevel &&
      jobPost.coreSkills &&
      jobPost.softSkills &&
      jobPost.jobRequirement &&
      jobPost.jobPay &&
      jobPost.jobDescription &&
      jobPost.jobEndDate &&
      jobPost.numberEmploy &&
      jobPost.jobLocation
    ) {
      dispatch(postJobs(jobPost));
      setshowBody("PopUpPost");
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const handleGetPosts = () => {
    // navigate(`/jobs/getPosts`);
    dispatch(getJobsPost());
  };

  const handlePreview = () => {
    navigate(`/jobs/post/${user?.result._id}`);
  };

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("profile")));
    dispatch(getJobsPost());
  }, []);

  // const itemsData = postData?.filter((item) => item.userId == id);
  if (!allJobsData) return null;
  const individualJobsPost = allJobsData?.posts.filter(
    (item) => item.id == user?.result._id
  );

  const handleProceed = () => {
    dispatch(getJobsPost());
    setshowBody("listOfJobs");
    setShowDelete(null);
    setjobPost({
      ...jobPost,
      jobRole: "",
      jobSummary: "",
      EmploymentType: "",
      WorkType: "",
      CityOfJob: "",
      jobLocation: "",
      jobPay: "",
      ExperienceLevel: "",
      jobDescription: "",
      jobRequirement: "",
      coreSkills: "",
      softSkills: "",
      jobEndDate: "",
      numberEmploy: "",
    });
  };

  console.log(individualJobsPost);
  console.log(jobPost);

  const handleShowDelete = (index) => {
    setShowDelete(index);
  };

  const handleDelete = (index) => {
    dispatch(deleteJobPost(index));

    setshowBody("PopUpSuccessFullDelete");
  };

  const handleCancel = () => {
    setshowBody("listOfJobs");
    setShowDelete(null);
  };

  const handleViewItemPage = (id) => {
    console.log(id);
    dispatch(getViewItemPage(id, navigate));
  };

  return (
    <Style.Employer>
      {/* individualJobsPost.length == 0 && (
        <Style.Employer_PostIconContainer>
          <Style.Employer_PostIconInnerContainer>
            <Style.Employer_PostIconInnerContainerHeader>
              <Style.Employer_PostIconInnerContainerHeaderButton
                onClick={() => setshowBody("postForm")}
                variant="contained"
              >
                Post Job
              </Style.Employer_PostIconInnerContainerHeaderButton>
            </Style.Employer_PostIconInnerContainerHeader>
            <Style.Employer_PostIconInnerContainerBody>
              <Style.Employer_PostIconInnerContainerBodyImgContainer>
                <BsSearch />
              </Style.Employer_PostIconInnerContainerBodyImgContainer>
              <Style.Employer_PostIconInnerContainerBodyBigText>
                No job post found
              </Style.Employer_PostIconInnerContainerBodyBigText>
              <Style.Employer_PostIconInnerContainerBodySmallText>
                You have not posted any job yet.
              </Style.Employer_PostIconInnerContainerBodySmallText>
              <Style.Employer_PostIconInnerContainerBodyButton
                onClick={() => setshowBody("postForm")}
                variant="contained"
              >
                Post a job
              </Style.Employer_PostIconInnerContainerBodyButton>
            </Style.Employer_PostIconInnerContainerBody>
          </Style.Employer_PostIconInnerContainer>
        </Style.Employer_PostIconContainer>
      )  */}
      {showBody == "listOfJobs" && (
        <Style.Employer_ListOfJobs>
          <Style.Employer_PostIconInnerContainerHeader>
            <Style.Employer_PostIconInnerContainerHeaderButton
              onClick={() => setshowBody("postForm")}
              variant="contained"
            >
              Post Job
            </Style.Employer_PostIconInnerContainerHeaderButton>
          </Style.Employer_PostIconInnerContainerHeader>
          <Style.Employer_ListOfJobsContainer>
            {individualJobsPost.map((val, index) => {
              return (
                <Style.Employer_ListOfJobsInnerBox>
                  <Style.Employer_ListOfJobsInnerBoxRoleAndEdit>
                    <Style.Employer_ListOfJobsInnerBoxRole>
                      <Style.Employer_ListOfJobsInnerBoxImgContainer>
                        <Style.Employer_ListOfJobsInnerBoxImg
                          src={require("../../../../image/Logo.png")}
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
                    <Style.Employer_ListOfJobsInnerBoxAndEdit
                      onClick={() => handleShowDelete(val._id)}
                    >
                      <BsThreeDotsVertical />
                    </Style.Employer_ListOfJobsInnerBoxAndEdit>
                    {val._id == showDelete && (
                      <Style.Employer_DeleteDiv
                        onClick={() => setshowBody("PopUpDelete")}
                      >
                        <Style.Employer_DeleteDivBigText>
                          Delete
                        </Style.Employer_DeleteDivBigText>
                      </Style.Employer_DeleteDiv>
                    )}
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
                    <Style.Employer_ListOfJobsInnerPostButton
                      onClick={() => handleViewItemPage(val._id)}
                      variant="contained"
                    >
                      View
                    </Style.Employer_ListOfJobsInnerPostButton>
                  </Style.Employer_ListOfJobsTypeAndPayDescription>
                </Style.Employer_ListOfJobsInnerBox>
              );
            })}
          </Style.Employer_ListOfJobsContainer>
        </Style.Employer_ListOfJobs>
      )}

      {showBody == "postForm" && (
        <Style.Employer_PostForm>
          <Style.Employer_PostFormConatiner>
            <Style.Employer_PostFormConatinerHeader style={{ display: "none" }}>
              <Style.Employer_PostIconInnerContainerHeaderButton
                onClick={handlePreview}
                variant="outlined"
              >
                Preview Post
              </Style.Employer_PostIconInnerContainerHeaderButton>
            </Style.Employer_PostFormConatinerHeader>
            <form>
              <Style.Employer_PostFormConatinerBody>
                <Style.Employer_PostFormConatinerBodyBigText>
                  Job Post
                </Style.Employer_PostFormConatinerBodyBigText>
                <Style.Employer_PostFormConatinerBodyInputBox>
                  <Style.Employer_PostFormConatinerBodyInputText>
                    What’s the Job Role?
                  </Style.Employer_PostFormConatinerBodyInputText>
                  <Style.Employer_PostFormConatinerBodyInput
                    name="jobRole"
                    required
                    onChange={(e) =>
                      setjobPost({
                        ...jobPost,
                        jobRole: e.target.value,
                      })
                    }
                    value={jobPost.jobRole}
                    type="text"
                    placeholder="What’s the Job Role?"
                  />
                </Style.Employer_PostFormConatinerBodyInputBox>

                <Style.Employer_PostFormConatinerBodyTextAreaBox>
                  <Style.Employer_PostFormConatinerBodyInputText>
                    Give the Summary of the role
                  </Style.Employer_PostFormConatinerBodyInputText>
                  <Style.Employer_PostFormConatinerBodyTextArea
                    name="jobSummary"
                    required
                    onChange={(e) =>
                      setjobPost({
                        ...jobPost,
                        jobSummary: e.target.value,
                      })
                    }
                    value={jobPost.jobSummary}
                    type="text"
                    placeholder="Give the Summary of the role"
                  />
                </Style.Employer_PostFormConatinerBodyTextAreaBox>
                <Style.Employer_PostFormConatinerBodyDivideBox>
                  <div>
                    <Style.Employer_PostFormConatinerBodyInputText>
                      What is the Employment Type?
                    </Style.Employer_PostFormConatinerBodyInputText>

                    <Style.Employer_PostFormConatinerSelect
                      select
                      name="EmploymentType"
                      onChange={(e) =>
                        setjobPost({
                          ...jobPost,
                          EmploymentType: e.target.value,
                        })
                      }
                      value={jobPost.EmploymentType}
                    >
                      <Style.Employer_PostFormConatinerOption selected="true">
                        What is the Employment Type?
                      </Style.Employer_PostFormConatinerOption>

                      {job_type.map((data, index) => (
                        <Style.Employer_PostFormConatinerOption key={index}>
                          {data}
                        </Style.Employer_PostFormConatinerOption>
                      ))}
                    </Style.Employer_PostFormConatinerSelect>
                  </div>

                  <div>
                    <Style.Employer_PostFormConatinerBodyInputText>
                      What is the Work Type?
                    </Style.Employer_PostFormConatinerBodyInputText>

                    <Style.Employer_PostFormConatinerSelect
                      name="WorkType"
                      onChange={(e) =>
                        setjobPost({
                          ...jobPost,
                          WorkType: e.target.value,
                        })
                      }
                      value={jobPost.WorkType}
                      select
                    >
                      <Style.Employer_PostFormConatinerOption selected="true">
                        What is the Work Type?
                      </Style.Employer_PostFormConatinerOption>

                      {job_method.map((data, index) => (
                        <Style.Employer_PostFormConatinerOption key={index}>
                          {data}
                        </Style.Employer_PostFormConatinerOption>
                      ))}
                    </Style.Employer_PostFormConatinerSelect>
                  </div>
                </Style.Employer_PostFormConatinerBodyDivideBox>

                <Style.Employer_PostFormConatinerBodyDivideBox>
                  <div>
                    <Style.Employer_PostFormConatinerBodyInputText>
                      What is the Location
                    </Style.Employer_PostFormConatinerBodyInputText>

                    <Style.Employer_PostFormConatinerSelect
                      name="jobLocation"
                      onChange={(e) =>
                        setjobPost({
                          ...jobPost,
                          jobLocation: e.target.value,
                        })
                      }
                      value={jobPost.jobLocation}
                      select
                    >
                      <Style.Employer_PostFormConatinerOption selected="true">
                        What is the Location
                      </Style.Employer_PostFormConatinerOption>

                      {country_list.map((data, index) => (
                        <Style.Employer_PostFormConatinerOption key={index}>
                          {data}
                        </Style.Employer_PostFormConatinerOption>
                      ))}
                    </Style.Employer_PostFormConatinerSelect>
                  </div>

                  <div>
                    <Style.Employer_PostFormConatinerBodyInputText>
                      What is the City/State
                    </Style.Employer_PostFormConatinerBodyInputText>

                    <Style.Employer_PostFormConatinerBodyDivideInput
                      name="CityOfJob"
                      required
                      onChange={(e) =>
                        setjobPost({
                          ...jobPost,
                          CityOfJob: e.target.value,
                        })
                      }
                      value={jobPost.CityOfJob}
                      type="text"
                      placeholder="What is the City/State"
                    />
                  </div>
                </Style.Employer_PostFormConatinerBodyDivideBox>

                <Style.Employer_PostFormConatinerBodyDivideBox>
                  <div>
                    <Style.Employer_PostFormConatinerBodyInputText>
                      What is the Pay for this role?
                    </Style.Employer_PostFormConatinerBodyInputText>

                    <Style.Employer_PostFormConatinerSelect
                      name="jobPay"
                      onChange={(e) =>
                        setjobPost({
                          ...jobPost,
                          jobPay: e.target.value,
                        })
                      }
                      value={jobPost.jobPay}
                      select
                    >
                      <Style.Employer_PostFormConatinerOption selected="true">
                        What is the Pay for this role?
                      </Style.Employer_PostFormConatinerOption>

                      {salary_Range.map((data, index) => (
                        <Style.Employer_PostFormConatinerOption key={index}>
                          {data}
                        </Style.Employer_PostFormConatinerOption>
                      ))}
                    </Style.Employer_PostFormConatinerSelect>
                  </div>

                  <div>
                    <Style.Employer_PostFormConatinerBodyInputText>
                      What is the experience level required?
                    </Style.Employer_PostFormConatinerBodyInputText>

                    <Style.Employer_PostFormConatinerSelect
                      name="ExperienceLevel"
                      onChange={(e) =>
                        setjobPost({
                          ...jobPost,
                          ExperienceLevel: e.target.value,
                        })
                      }
                      value={jobPost.ExperienceLevel}
                      select
                    >
                      <Style.Employer_PostFormConatinerOption selected="true">
                        What is the experience level required?
                      </Style.Employer_PostFormConatinerOption>

                      {experience_Range.map((data, index) => (
                        <Style.Employer_PostFormConatinerOption key={index}>
                          {data}
                        </Style.Employer_PostFormConatinerOption>
                      ))}
                    </Style.Employer_PostFormConatinerSelect>
                  </div>
                </Style.Employer_PostFormConatinerBodyDivideBox>

                <Style.Employer_PostFormConatinerBodyTextAreaBox>
                  <Style.Employer_PostFormConatinerBodyInputText>
                    Job Description
                  </Style.Employer_PostFormConatinerBodyInputText>
                  <Style.Employer_PostFormConatinerBodyTextArea
                    name="jobDescription"
                    required
                    onChange={(e) =>
                      setjobPost({
                        ...jobPost,
                        jobDescription: e.target.value,
                      })
                    }
                    value={jobPost.jobDescription}
                    type="text"
                    placeholder="Job Description/Responsibilities"
                  />
                </Style.Employer_PostFormConatinerBodyTextAreaBox>

                <Style.Employer_PostFormConatinerBodyTextAreaBox>
                  <Style.Employer_PostFormConatinerBodyInputText>
                    Job Requirement
                  </Style.Employer_PostFormConatinerBodyInputText>
                  <Style.Employer_PostFormConatinerBodyTextArea
                    name="jobRequirement"
                    required
                    onChange={(e) =>
                      setjobPost({
                        ...jobPost,
                        jobRequirement: e.target.value,
                      })
                    }
                    value={jobPost.jobRequirement}
                    type="text"
                    placeholder="Job Requirement"
                  />
                </Style.Employer_PostFormConatinerBodyTextAreaBox>

                <Style.Employer_PostFormConatinerBodyInputBox>
                  <Style.Employer_PostFormConatinerBodyInputText>
                    Core Skills
                  </Style.Employer_PostFormConatinerBodyInputText>
                  <Style.Employer_PostFormConatinerBodyInput
                    name="coreSkills"
                    required
                    onChange={(e) =>
                      setjobPost({
                        ...jobPost,
                        coreSkills: e.target.value,
                      })
                    }
                    value={jobPost.coreSkills}
                    type="text"
                    placeholder="Core Skills"
                  />
                </Style.Employer_PostFormConatinerBodyInputBox>

                <Style.Employer_PostFormConatinerBodyTextAreaBox>
                  <Style.Employer_PostFormConatinerBodyInputText>
                    Soft Skills
                  </Style.Employer_PostFormConatinerBodyInputText>
                  <Style.Employer_PostFormConatinerBodyTextArea
                    name="softSkills"
                    required
                    onChange={(e) =>
                      setjobPost({
                        ...jobPost,
                        softSkills: e.target.value,
                      })
                    }
                    value={jobPost.softSkills}
                    type="text"
                    placeholder="Soft Skills"
                  />
                </Style.Employer_PostFormConatinerBodyTextAreaBox>

                <Style.Employer_PostFormConatinerBodyInputBox>
                  <Style.Employer_PostFormConatinerBodyInputText>
                    What is the end date of the job post?
                  </Style.Employer_PostFormConatinerBodyInputText>
                  <Style.Employer_PostFormConatinerBodyInput
                    name="jobEndDate"
                    required
                    onChange={(e) =>
                      setjobPost({
                        ...jobPost,
                        jobEndDate: e.target.value,
                      })
                    }
                    value={jobPost.jobEndDate}
                    type="date"
                    placeholder="What is the end date of the job post?"
                  />
                </Style.Employer_PostFormConatinerBodyInputBox>

                <Style.Employer_PostFormConatinerBodyInputBox>
                  <Style.Employer_PostFormConatinerBodyInputText>
                    How many hires do you require?
                  </Style.Employer_PostFormConatinerBodyInputText>
                  <Style.Employer_PostFormConatinerBodyInput
                    name="numberEmploy"
                    required
                    onChange={(e) =>
                      setjobPost({
                        ...jobPost,
                        numberEmploy: e.target.value,
                      })
                    }
                    value={jobPost.numberEmploy}
                    type="number"
                    placeholder="How many hires do you require?"
                  />
                </Style.Employer_PostFormConatinerBodyInputBox>

                {showError && (
                  <Style.Employer_PostFormConatinerBodyInputText
                    style={{
                      width: "100%",
                      textAlign: "center",
                      color: "green",
                      marginBottom: "24px",
                      fontSize: "20px",
                    }}
                  >
                    Please Complete the form
                  </Style.Employer_PostFormConatinerBodyInputText>
                )}

                <Style.Employer_PostFormConatinerBodyButtonDiv>
                  <Style.Employer_PostFormConatinerBodyInnerButtonDiv>
                    <Style.Employer_PostIconInnerContainerHeaderButton
                      onClick={() => setshowBody("listOfJobs")}
                      variant="outlined"
                    >
                      Cancel
                    </Style.Employer_PostIconInnerContainerHeaderButton>
                    <Style.Employer_PostIconInnerContainerHeaderButton
                      onClick={handleSubmitJobPost}
                      variant="contained"
                    >
                      Post Job
                    </Style.Employer_PostIconInnerContainerHeaderButton>
                  </Style.Employer_PostFormConatinerBodyInnerButtonDiv>
                </Style.Employer_PostFormConatinerBodyButtonDiv>
              </Style.Employer_PostFormConatinerBody>
            </form>
          </Style.Employer_PostFormConatiner>
        </Style.Employer_PostForm>
      )}

      {showBody == "PopUpPost" && (
        <Style.Employer_PopUpPost>
          <Style.Employer_PopUpPostContainer>
            <Style.Employer_PopUpPostImgContainer>
              <Style.Employer_PopUpPostImg
                src={require("../../../../image/Success.png")}
                alt="img"
              />
            </Style.Employer_PopUpPostImgContainer>
            <Style.Employer_PopUpPostHeadText>
              Job Post
            </Style.Employer_PopUpPostHeadText>
            <Style.Employer_PopUpPostSubText>
              You have successfully posted a new job
            </Style.Employer_PopUpPostSubText>
            <Style.Employer_PopUpPostButton
              onClick={handleProceed}
              variant="contained"
            >
              Proceed
            </Style.Employer_PopUpPostButton>
          </Style.Employer_PopUpPostContainer>
        </Style.Employer_PopUpPost>
      )}

      {showBody == "PopUpDelete" && (
        <Style.Employer_PopUpPost>
          <Style.Employer_PopUpPostContainer>
            <Style.Employer_PopUpPostImgContainer>
              <Style.Employer_PopUpPostImg
                src={require("../../../../image/Success.png")}
                alt="img"
              />
            </Style.Employer_PopUpPostImgContainer>
            <Style.Employer_PopUpPostHeadText>
              You want to Delete Job Post
            </Style.Employer_PopUpPostHeadText>
            <Style.Employer_PopUpPostSubText>
              Are you sure you want to delete job post
            </Style.Employer_PopUpPostSubText>
            <Style.Employer_PopUpPostButtonDiv>
              <Style.Employer_PopUpPostTwoButton
                onClick={handleCancel}
                variant="outlined"
              >
                Cancel
              </Style.Employer_PopUpPostTwoButton>
              <Style.Employer_PopUpPostTwoButton
                onClick={() => handleDelete(showDelete)}
                variant="contained"
              >
                Proceed
              </Style.Employer_PopUpPostTwoButton>
            </Style.Employer_PopUpPostButtonDiv>
          </Style.Employer_PopUpPostContainer>
        </Style.Employer_PopUpPost>
      )}

      {showBody == "PopUpSuccessFullDelete" && (
        <Style.Employer_PopUpPost>
          <Style.Employer_PopUpPostContainer>
            <Style.Employer_PopUpPostImgContainer>
              <Style.Employer_PopUpPostImg
                src={require("../../../../image/Success.png")}
                alt="img"
              />
            </Style.Employer_PopUpPostImgContainer>
            <Style.Employer_PopUpPostHeadText>
              Job Post
            </Style.Employer_PopUpPostHeadText>
            <Style.Employer_PopUpPostSubText>
              You have successfully Deleted job
            </Style.Employer_PopUpPostSubText>
            <Style.Employer_PopUpPostButton
              onClick={handleProceed}
              variant="contained"
            >
              Proceed
            </Style.Employer_PopUpPostButton>
          </Style.Employer_PopUpPostContainer>
        </Style.Employer_PopUpPost>
      )}

      {/*   showBody == "listOfJobs" && (
        <Style.Employer_ListOfJobs>
          <Style.Employer_PostIconInnerContainerHeader>
            <Style.Employer_PostIconInnerContainerHeaderButton
              onClick={() => setshowBody("postForm")}
              variant="contained"
            >
              Post Job
            </Style.Employer_PostIconInnerContainerHeaderButton>
          </Style.Employer_PostIconInnerContainerHeader>
          <Style.Employer_ListOfJobsContainer>
            {individualJobsPost.map((val, index) => {
              return (
                <Style.Employer_ListOfJobsInnerBox>
                  <Style.Employer_ListOfJobsInnerBoxRoleAndEdit>
                    <Style.Employer_ListOfJobsInnerBoxRole>
                      <Style.Employer_ListOfJobsInnerBoxImgContainer>
                        <Style.Employer_ListOfJobsInnerBoxImg
                          src={require("../../../../image/Logo.png")}
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
                    <Style.Employer_ListOfJobsInnerBoxAndEdit>
                      <BsThreeDotsVertical />
                    </Style.Employer_ListOfJobsInnerBoxAndEdit>
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
                    <Style.Employer_ListOfJobsInnerPostButton variant="contained">
                      View
                    </Style.Employer_ListOfJobsInnerPostButton>
                  </Style.Employer_ListOfJobsTypeAndPayDescription>
                </Style.Employer_ListOfJobsInnerBox>
              );
            })}
          </Style.Employer_ListOfJobsContainer>
        </Style.Employer_ListOfJobs>
      )    */}
    </Style.Employer>
  );
};

export default EmployerBody;
