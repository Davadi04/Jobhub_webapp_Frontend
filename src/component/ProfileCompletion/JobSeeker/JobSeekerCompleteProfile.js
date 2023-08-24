import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { AiOutlineCheck } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { country_list } from "../../../ListOfCountries";
import { FinalsignUp } from "../../../action/auth";
import { LOGOUT } from "../../../constants/actionType";

const JobSeekerCompleteProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authData, isLoading } = useSelector((state) => state.auth);
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("profile"))
  );

  console.log(user);
  console.log(authData);

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("profile")));
    if (
      user.Education &&
      user.CurentPosition &&
      user.Experience &&
      user.Skills &&
      user.yearsOfExperience &&
      user.uploadCv
    ) {
      dispatch({ type: LOGOUT });
      navigate("/");
    }
  }, []);

  const initialVariable = {
    id: user?.result._id || authData?.result._id,
    PhoneNumber: "",
    PassWord: "",
    DateOfBirth: "",
    bio: "",
    Gender: "",
    Location: "",
    Education: "",
    CurentPosition: "",
    Experience: "",
    Skills: "",
    yearsOfExperience: "",
    uploadCv: "",
    SavedItemArray: [],
  };

  const [profileField, setProfileField] = useState(initialVariable);

  console.log(profileField);

  const [showCheck, setshowCheck] = useState(true);
  const [switchRole, setSwitchRole] = useState(true);

  const highestQualificationData = [
    "Degree",
    "Diploma",
    "High School (S.S.C.E)",
    "HND",
    "MBA / MSc",
    "MBBS",
    "MPhil / PhD",
    "N.C.E",
    "OND",
    "Vocational",
  ];

  const yearsOfExperienceData = [
    "1 years",
    "2 years",
    "3 years",
    "4 years",
    "5 years",
    "6 years",
    "7 years",
    "8 years",
    "9 years",
    "10 years",
    "11 years",
    "12 years",
    "13 years",
    "14 years",
    "15 years",
    "16 years",
    "17 years",
    "18 years",
    "19 years",
    "20 years",
    "More than 20 years",
  ];

  const currentJobFunctionData = [
    "Accounting, Auditing &amp; BsFillPhoneLandscapeFill",
    "Admin &amp; Office",
    "Building &amp; Architecture",
    "Community &amp; Social Services",
    "Consulting &amp; Strategy",
    "Creative &amp; Design",
    "Customer Service &amp; Support",
    "Driver &amp; Transport Services",
    "Engineering &amp; Technology",
    "Estate Agents &amp; Property Management",
    "Farming &amp; Agriculture",
    "Food Services &amp; Catering",
    "Health &amp; Safety",
    "Hospitality &amp; Leisure",
    "Human Resources",
    "Legal Services",
    "Management &amp; Business Development",
    "Marketing &amp; Communications",
    "Medical &amp; Pharmaceutical",
    "Product &amp; Project Management",
    "Quality Control &amp; Assurance",
    "Research, Teaching &amp; Training",
    "Sales",
    "Software &amp; Data",
    "Supply Chain &amp; Procurement",
    "Trades &amp; Services",
  ];

  const availabilityData = [
    "Immediately",
    "1 Week",
    "2 Weeks",
    "3 Weeks",
    "1 Month",
    "2 Months",
    "More than 3 Months",
  ];

  const genderData = ["male", "female", "don't wish to answer"];

  const handleCreateAccountSubmit = (e) => {
    e.preventDefault();
    if (
      profileField.Education &&
      profileField.CurentPosition &&
      profileField.Experience &&
      profileField.Skills &&
      profileField.yearsOfExperience &&
      profileField.uploadCv
    ) {
      dispatch(FinalsignUp(profileField, navigate));
    }
  };

  console.log(profileField);

  const handleChangeSet = (e) => {
    e.preventDefault();

    if (
      profileField.Gender &&
      profileField.PhoneNumber &&
      profileField.Location &&
      profileField.DateOfBirth
    ) {
      setshowCheck(false);
      setSwitchRole(false);
    } else {
      setshowCheck(true);
    }

    console.log("see");
  };

  const handleChangeBack = () => {
    setshowCheck(true);
    setSwitchRole(true);
  };

  return (
    <Style.JobSeeker>
      <Style.JobSeeker_ProfileSteps>
        <Style.JobSeeker_ProfileStepsCont>
          <Style.JobSeeker_ProfileStepsHeader>
            take few steps to complete profile
          </Style.JobSeeker_ProfileStepsHeader>

          <Style.JobSeeker_ProfileStepsDiv>
            <Style.JobSeeker_ProfileStepsNumberHolder>
              1
            </Style.JobSeeker_ProfileStepsNumberHolder>
            <Style.JobSeeker_ProfileStepsSecondPara>
              take few steps to complete profile
            </Style.JobSeeker_ProfileStepsSecondPara>

            <Style.JobSeeker_ProfileStepsIconHolder>
              <AiOutlineCheck
                className={showCheck ? "whiteCheck" : "blueCheck"}
              />
            </Style.JobSeeker_ProfileStepsIconHolder>
          </Style.JobSeeker_ProfileStepsDiv>

          <Style.JobSeeker_ProfileStepsDiv>
            <Style.JobSeeker_ProfileStepsNumberSecondHolder
              style={
                showCheck ? {} : { backgroundColor: "blue", color: "white" }
              }
            >
              2
            </Style.JobSeeker_ProfileStepsNumberSecondHolder>
            <Style.JobSeeker_ProfileStepsSecondPara>
              take few steps to complete profile
            </Style.JobSeeker_ProfileStepsSecondPara>

            <Style.JobSeeker_ProfileStepsIconHolder>
              <AiOutlineCheck style={{ visibility: "hidden" }} />
            </Style.JobSeeker_ProfileStepsIconHolder>
          </Style.JobSeeker_ProfileStepsDiv>
        </Style.JobSeeker_ProfileStepsCont>
        <Style.JobSeeker_ProfileStepsImageContainer></Style.JobSeeker_ProfileStepsImageContainer>
      </Style.JobSeeker_ProfileSteps>

      <Style.JobSeeker_ProfileDetails>
        {switchRole ? (
          <Style.JobSeeker_ProfileDetailsDiv>
            <Style.JobSeeker_ProfileDetailsInnerContainer>
              <Style.Cv_Span>Phone Number</Style.Cv_Span>
              <Style.JobSeeker_SectionContainerInput
                required
                name="PhoneNumber"
                onChange={(e) =>
                  setProfileField({
                    ...profileField,
                    PhoneNumber: e.target.value,
                  })
                }
                value={profileField.PhoneNumber}
                type="number"
                variant="outlined"
                placeholder="Enter phone number"
              />
            </Style.JobSeeker_ProfileDetailsInnerContainer>
            <Style.JobSeeker_ProfileDetailsInnerBioContainer>
              <Style.Cv_Span>Bio</Style.Cv_Span>
              <Style.JobSeeker_SectionContainerBioInput
                required
                name="bio"
                onChange={(e) =>
                  setProfileField({ ...profileField, bio: e.target.value })
                }
                value={profileField.bio}
                type="text"
                variant="outlined"
                placeholder="Enter brief summary"
              />
            </Style.JobSeeker_ProfileDetailsInnerBioContainer>
            <Style.JobSeeker_ProfileDetailsInnerContainer>
              <Style.Cv_Span>Date Of Birth</Style.Cv_Span>
              <Style.JobSeeker_SectionContainerInput
                required
                name="DateOfBirth"
                onChange={(e) =>
                  setProfileField({
                    ...profileField,
                    DateOfBirth: e.target.value,
                  })
                }
                value={profileField.DateOfBirth}
                type="date"
                variant="outlined"
                label=""
              />
            </Style.JobSeeker_ProfileDetailsInnerContainer>
            <Style.JobSeeker_ProfileDetailsGenderMainContainer>
              <Style.JobSeeker_ProfileDetailsGenderContainer>
                <Style.Cv_Span>Gender</Style.Cv_Span>
                <Style.Profile_Select
                  select
                  name="Gender"
                  onChange={(e) =>
                    setProfileField({ ...profileField, Gender: e.target.value })
                  }
                  value={profileField.Gender}
                >
                  <Style.Option_Key selected="true">Gender</Style.Option_Key>

                  {genderData.map((data, index) => (
                    <Style.Option_Key key={index}>{data}</Style.Option_Key>
                  ))}
                </Style.Profile_Select>
              </Style.JobSeeker_ProfileDetailsGenderContainer>

              <Style.JobSeeker_ProfileDetailsGenderContainer>
                <Style.Cv_Span>Location</Style.Cv_Span>
                <Style.Profile_Select
                  select
                  onChange={(e) =>
                    setProfileField({
                      ...profileField,
                      Location: e.target.value,
                    })
                  }
                  value={profileField.Location}
                  name="Location"
                >
                  <Style.Option_Key selected="true">Location</Style.Option_Key>

                  {country_list.map((data, index) => (
                    <Style.Option_Key key={index}>{data}</Style.Option_Key>
                  ))}
                </Style.Profile_Select>
              </Style.JobSeeker_ProfileDetailsGenderContainer>
            </Style.JobSeeker_ProfileDetailsGenderMainContainer>
            <Style.JobSeeker_SectionContainerButton
              onClick={(e) => handleChangeSet(e)}
              variant="contained"
            >
              Proceed
            </Style.JobSeeker_SectionContainerButton>{" "}
          </Style.JobSeeker_ProfileDetailsDiv>
        ) : (
          <Style.JobSeeker_ProfileDetailsSecondPageDiv>
            <Style.JobSeeker_ProfileDetailsInnerContainer>
              <Style.Cv_Span>Education</Style.Cv_Span>
              <Style.JobSeeker_SectionContainerInput
                name="Education"
                onChange={(e) =>
                  setProfileField({
                    ...profileField,
                    Education: e.target.value,
                  })
                }
                value={profileField.Education}
                type="text"
                variant="outlined"
                placeholder="Enter Your education info"
              />
            </Style.JobSeeker_ProfileDetailsInnerContainer>

            <Style.JobSeeker_ProfileDetailsInnerContainer>
              <Style.Cv_Span>Curent Position</Style.Cv_Span>
              <Style.JobSeeker_SectionContainerInput
                required
                name="CurentPosition"
                onChange={(e) =>
                  setProfileField({
                    ...profileField,
                    CurentPosition: e.target.value,
                  })
                }
                value={profileField.CurentPosition}
                type="text"
                variant="outlined"
                placeholder="Enter current position"
              />
            </Style.JobSeeker_ProfileDetailsInnerContainer>

            <Style.JobSeeker_ProfileDetailsInnerBioContainer>
              <Style.Cv_Span>Experience</Style.Cv_Span>
              <Style.JobSeeker_SectionContainerBioInput
                name="Experience"
                onChange={(e) =>
                  setProfileField({
                    ...profileField,
                    Experience: e.target.value,
                  })
                }
                value={profileField.Experience}
                type="text"
                variant="outlined"
                placeholder="Enter Your Experience"
              />
            </Style.JobSeeker_ProfileDetailsInnerBioContainer>

            <Style.JobSeeker_ProfileDetailsInnerContainer>
              <Style.Cv_Span>Skills</Style.Cv_Span>
              <Style.JobSeeker_SectionContainerInput
                name="Skills"
                onChange={(e) =>
                  setProfileField({ ...profileField, Skills: e.target.value })
                }
                value={profileField.Skills}
                type="text"
                variant="outlined"
                placeholder="Enter Your Skills"
              />
            </Style.JobSeeker_ProfileDetailsInnerContainer>

            <Style.JobSeeker_ProfileDetailsInnerContainer>
              <Style.Cv_Span>Years Of Experience</Style.Cv_Span>
              <Style.JobSeeker_SectionContainerInput
                required
                name="yearsOfExperience"
                onChange={(e) =>
                  setProfileField({
                    ...profileField,
                    yearsOfExperience: e.target.value,
                  })
                }
                value={profileField.yearsOfExperience}
                type="number"
                variant="outlined"
                placeholder="Enter years of experience"
              />
            </Style.JobSeeker_ProfileDetailsInnerContainer>
            <Style.JobSeeker_ProfileDetailsUploadDiv>
              <Style.Cv_Span>Upload CV</Style.Cv_Span>
              <Style.JobSeeker_SectionContainerUploadCvInput
                required
                name="uploadCv"
                onChange={(e) =>
                  setProfileField({
                    ...profileField,
                    uploadCv: e.target.value,
                  })
                }
                value={profileField.uploadCv}
                type="file"
                variant="outlined"
                id="uploadCvfile"
              />

              {/*
              <Style.JobSeeker_ProfileDetailsUploadinnerDiv>
                <Style.JobSeeker_ProfileDetailsUploadinnerLabel htmlFor="uploadCvfile">
                  <Style.JobSeeker_ProfileDetailsUploadinnerLabelDiv>
                    <Style.JobSeeker_Header_ImageContainer>
                      <Style.JobSeeker_Header_Image
                        src={require("../../../image/upload-cloud.png")}
                        alt="img"
                      />
                    </Style.JobSeeker_Header_ImageContainer>

                    <Style.JobSeeker_UploadCvText>
                      <span style={{ color: "#444CE7" }}> click to upload</span>{" "}
                      or drag and drop
                    </Style.JobSeeker_UploadCvText>

                    <Style.JobSeeker_UploadCvSubText>
                      PDF(max 800*400px)
                    </Style.JobSeeker_UploadCvSubText>
                  </Style.JobSeeker_ProfileDetailsUploadinnerLabelDiv>
                </Style.JobSeeker_ProfileDetailsUploadinnerLabel>
                <Style.JobSeeker_SectionContainerUploadCvInput
                  required
                  name="uploadCv"
                  onChange={(e) =>
                    setProfileField({
                      ...profileField,
                      uploadCv: e.target.value,
                    })
                  }
                  value={profileField.uploadCv}
                  type="file"
                  variant="outlined"
                  id="uploadCvfile"
                />
              </Style.JobSeeker_ProfileDetailsUploadinnerDiv>
              */}
            </Style.JobSeeker_ProfileDetailsUploadDiv>

            <Style.JobSeeker_ProfileGenderHolder>
              <Style.JobSeeker_SectionContainerButtonBack
                onClick={handleChangeBack}
                variant="outlined"
              >
                Back
              </Style.JobSeeker_SectionContainerButtonBack>

              <Style.JobSeeker_SectionContainerButtonChange
                onClick={(e) => handleCreateAccountSubmit(e)}
                variant="contained"
              >
                proceed
              </Style.JobSeeker_SectionContainerButtonChange>
            </Style.JobSeeker_ProfileGenderHolder>
          </Style.JobSeeker_ProfileDetailsSecondPageDiv>
        )}
      </Style.JobSeeker_ProfileDetails>
    </Style.JobSeeker>
  );
};

export default JobSeekerCompleteProfile;
