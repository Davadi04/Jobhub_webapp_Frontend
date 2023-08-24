import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { country_list } from "../../../ListOfCountries";
import { EditProfile, deleteAccount } from "../../../action/profile";
import { useParams } from "react-router-dom";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { BsExclamationTriangle } from "react-icons/bs";
import { LOGOUT } from "../../../constants/actionType";

const Accounsetting = ({
  setSearch,
  search,
  currentLocation,
  setCurrentLocation,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("profile"))
  );
  const { authData } = useSelector((state) => state.auth);
  const [popUp, setPopUp] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showPopUpDelete, setShowPopUpDelete] = useState(false);
  const [showSectionShow, setShowSectionShow] = useState("profile");
  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("profile")));
  }, []);

  const initialVariable = {
    id: user?.result._id || authData?.result._id,
    fullName: user?.result.fullName || authData?.result.fullName,
    email: user?.result.email || authData?.result.email,
    PhoneNumber: user?.result.PhoneNumber || authData?.result.PhoneNumber,
    Gender: user?.result.Gender || authData?.result.Gender,
    Role: user?.result.Role || authData?.result.Role,
    Summary: user?.result.Summary || authData?.result.Summary,
    Experience: user?.result.Experience || authData?.result.Experience,
    Education: user?.result.Education || authData?.result.Education,
    Skills: user?.result.Skills || authData?.result.Skills,
    Linkedin: user?.result.Linkedin || authData?.result.Linkedin,
    Portfolio: user?.result.Portfolio || authData?.result.Portfolio,
  };

  const initialEmployerData = {
    id: user?.result._id || authData?.result._id,
    fullName: user?.result.fullName || authData?.result.fullName,
    email: user?.result.email || authData?.result.email,
    CompanyRepresentative:
      user?.result.CompanyRepresentative ||
      authData?.result.CompanyRepresentative,
    AboutCompany: user?.result.AboutCompany || authData?.result.AboutCompany,
    Address: user?.result.Address || authData?.result.Address,
    CompanySize: user?.result.CompanySize || authData?.result.CompanySize,
    CompanyWebsite:
      user?.result.CompanyWebsite || authData?.result.CompanyWebsite,
  };
  {
    /* const [profileField, setProfileField] = useState(
    authData?.result.field || user?.result.field == "employer"
      ? initialEmployerData
      : initialVariable
  );  */
  }

  const [employerData, setEmployerData] = useState(initialEmployerData);
  const [jobSeeker, setJobSeeker] = useState(initialVariable);

  console.log(authData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user?.result.field == "employer") {
      if (
        employerData.AboutCompany &&
        employerData.Address &&
        employerData.CompanyRepresentative &&
        employerData.CompanySize &&
        employerData.CompanyWebsite &&
        employerData.fullName
      ) {
        const profileField = employerData;
        dispatch(EditProfile(profileField));
        setPopUp(true);
        setShowError(false);
      } else {
        setShowError(true);
      }
    } else if (user?.result.field == "customer") {
      if (
        jobSeeker.fullName &&
        jobSeeker.Role &&
        jobSeeker.Summary &&
        jobSeeker.Experience &&
        jobSeeker.Education &&
        jobSeeker.Skills &&
        jobSeeker.Linkedin &&
        jobSeeker.Portfolio
      ) {
        const profileField = jobSeeker;
        dispatch(EditProfile(profileField));
        setPopUp(true);
        setShowError(false);
      } else {
        setShowError(true);
      }
    }
  };

  const handlePopUpCancelDelete = () => {
    setShowPopUpDelete(false);
    setShowDelete(true);
  };

  const handleDelete = () => {
    dispatch(deleteAccount(id, navigate));
    setSearch({
      searchInput: "",
      searchLocation: "",
      searchJobType: "",
      searchJobMethod: "",
      searchSalaryRange: "",
      searchExperience: "",
    });
    dispatch({ type: LOGOUT });
  };

  const handleShowSectionProfile = () => {
    setShowSectionShow("profile");
    setShowDelete(false);
    setShowPopUpDelete(false);
  };

  const handleShowSectionSetting = () => {
    setShowSectionShow("setting");
    setShowDelete(true);
    setShowPopUpDelete(false);
  };

  return (
    <Style.AccountSetting>
      {showPopUpDelete && (
        <Style.AccountSetting_PopUpDelete>
          <Style.AccountSetting_PopUpDeleteDiv>
            <Style.AccountSetting_PopUpImgContainer>
              <BsExclamationTriangle />
            </Style.AccountSetting_PopUpImgContainer>
            <Style.AccountSetting_PopUpHeader>
              You’re about to delete your account
            </Style.AccountSetting_PopUpHeader>
            <Style.AccountSetting_PopUpSubHeader>
              It’s sad to see you go. Are you sure you want to delete your
              account?
            </Style.AccountSetting_PopUpSubHeader>
            <Style.AccountSetting_PopUpButtonDeleteDiv>
              <Style.AccountSetting_PopUpButtonDelete
                onClick={handlePopUpCancelDelete}
                variant="outlined"
              >
                Cancel
              </Style.AccountSetting_PopUpButtonDelete>
              <Style.AccountSetting_PopUpButtonDelete
                onClick={handleDelete}
                variant="contained"
              >
                Delete
              </Style.AccountSetting_PopUpButtonDelete>
            </Style.AccountSetting_PopUpButtonDeleteDiv>
          </Style.AccountSetting_PopUpDeleteDiv>
        </Style.AccountSetting_PopUpDelete>
      )}

      <Style.AccountSetting_Main>
        {!showPopUpDelete && showDelete && (
          <>
            <Style.AccountSetting_Header>
              <Style.AccountSetting_HeaderDiv>
                <Style.AccountSetting_HeaderParagraph
                  className={showSectionShow == "profile" && "profileSelection"}
                  onClick={handleShowSectionProfile}
                >
                  Profile
                </Style.AccountSetting_HeaderParagraph>
                <Style.AccountSetting_HeaderParagraph
                  className={showSectionShow == "setting" && "profileSelection"}
                  onClick={handleShowSectionSetting}
                >
                  Setting
                </Style.AccountSetting_HeaderParagraph>
              </Style.AccountSetting_HeaderDiv>
            </Style.AccountSetting_Header>
            <Style.AccountSetting_FirstSection>
              <Style.AccountSetting_FirstSectionSubDiv>
                <Style.AccountSetting_DeleteDiv>
                  <Style.AccountSetting_DeleteDivHeader>
                    Delete Account
                  </Style.AccountSetting_DeleteDivHeader>
                  <Style.AccountSetting_DeleteDivSubPara
                    onClick={() => setShowPopUpDelete(true)}
                  >
                    delete account
                  </Style.AccountSetting_DeleteDivSubPara>
                </Style.AccountSetting_DeleteDiv>
              </Style.AccountSetting_FirstSectionSubDiv>
            </Style.AccountSetting_FirstSection>{" "}
          </>
        )}
        {!authData?.result.CompanyWebsite && !showDelete && (
          <>
            <Style.AccountSetting_Header>
              <Style.AccountSetting_HeaderDiv>
                <Style.AccountSetting_HeaderParagraph
                  className={showSectionShow == "profile" && "profileSelection"}
                  onClick={handleShowSectionProfile}
                >
                  Profile
                </Style.AccountSetting_HeaderParagraph>
                <Style.AccountSetting_HeaderParagraph
                  className={showSectionShow == "setting" && "profileSelection"}
                  onClick={handleShowSectionSetting}
                >
                  Setting
                </Style.AccountSetting_HeaderParagraph>
              </Style.AccountSetting_HeaderDiv>
            </Style.AccountSetting_Header>
            <Style.AccountSetting_FirstSection>
              <Style.AccountSetting_FirstSectionSubDiv>
                <Style.AccountSetting_IndividualItemContainer>
                  <Style.AccountSetting_IndividualItemLabel>
                    fullName
                  </Style.AccountSetting_IndividualItemLabel>

                  <Style.AccountSetting_IndividualItemSmallInput
                    name="fullName"
                    type="text"
                    onChange={(e) =>
                      setJobSeeker({
                        ...jobSeeker,
                        fullName: e.target.value,
                      })
                    }
                    value={jobSeeker.fullName}
                    variant="outlined"
                    placeholder="Full Name"
                    fullWidth
                  />
                </Style.AccountSetting_IndividualItemContainer>

                <Style.AccountSetting_IndividualItemContainer>
                  <Style.AccountSetting_IndividualItemLabel>
                    email
                  </Style.AccountSetting_IndividualItemLabel>

                  <Style.AccountSetting_IndividualItemSmallInput
                    name="email"
                    value={jobSeeker.email}
                    type="email"
                    variant="outlined"
                    placeholder="Email Address"
                  />
                </Style.AccountSetting_IndividualItemContainer>

                <Style.AccountSetting_IndividualBigItemContainer>
                  <Style.AccountSetting_IndividualItemLabel>
                    Role
                  </Style.AccountSetting_IndividualItemLabel>

                  <Style.AccountSetting_IndividualItemSmallInput
                    name="Role"
                    onChange={(e) =>
                      setJobSeeker({
                        ...jobSeeker,
                        Role: e.target.value,
                      })
                    }
                    value={jobSeeker.Role}
                    type="text"
                    variant="outlined"
                    placeholder="Role"
                  />
                </Style.AccountSetting_IndividualBigItemContainer>

                <Style.AccountSetting_IndividualItemContainer>
                  <Style.AccountSetting_IndividualItemLabel>
                    Portfolio Link(optional)
                  </Style.AccountSetting_IndividualItemLabel>

                  <Style.AccountSetting_IndividualItemSmallInput
                    name="Portfolio"
                    type="text"
                    onChange={(e) =>
                      setJobSeeker({
                        ...jobSeeker,
                        Portfolio: e.target.value,
                      })
                    }
                    value={jobSeeker.Portfolio}
                    variant="outlined"
                    placeholder="Portfolio"
                    fullWidth
                  />
                </Style.AccountSetting_IndividualItemContainer>

                <Style.AccountSetting_IndividualItemContainer>
                  <Style.AccountSetting_IndividualItemLabel>
                    Linkedin Link(optional)
                  </Style.AccountSetting_IndividualItemLabel>

                  <Style.AccountSetting_IndividualItemSmallInput
                    name="Linkedin"
                    type="text"
                    onChange={(e) =>
                      setJobSeeker({
                        ...jobSeeker,
                        Linkedin: e.target.value,
                      })
                    }
                    value={jobSeeker.Linkedin}
                    variant="outlined"
                    placeholder="Linkedin"
                    fullWidth
                  />
                </Style.AccountSetting_IndividualItemContainer>

                <Style.AccountSetting_IndividualBigItemContainer>
                  <Style.AccountSetting_IndividualItemLabel>
                    Summary
                  </Style.AccountSetting_IndividualItemLabel>

                  <Style.AccountSetting_IndividualItemBigInput
                    name="Summary"
                    onChange={(e) =>
                      setJobSeeker({
                        ...jobSeeker,
                        Summary: e.target.value,
                      })
                    }
                    value={jobSeeker.Summary}
                    type="text"
                    variant="outlined"
                    placeholder="Summary"
                  />
                </Style.AccountSetting_IndividualBigItemContainer>

                <Style.AccountSetting_IndividualBigItemContainer>
                  <Style.AccountSetting_IndividualItemLabel>
                    Experience
                  </Style.AccountSetting_IndividualItemLabel>

                  <Style.AccountSetting_IndividualItemBigInput
                    name="Experience"
                    onChange={(e) =>
                      setJobSeeker({
                        ...jobSeeker,
                        Experience: e.target.value,
                      })
                    }
                    value={jobSeeker.Experience}
                    type="text"
                    variant="outlined"
                    placeholder="Experience"
                  />
                </Style.AccountSetting_IndividualBigItemContainer>

                <Style.AccountSetting_IndividualBigItemContainer>
                  <Style.AccountSetting_IndividualItemLabel>
                    Education
                  </Style.AccountSetting_IndividualItemLabel>

                  <Style.AccountSetting_IndividualItemBigInput
                    name="Education"
                    onChange={(e) =>
                      setJobSeeker({
                        ...jobSeeker,
                        Education: e.target.value,
                      })
                    }
                    value={jobSeeker.Education}
                    type="text"
                    variant="outlined"
                    placeholder="Education"
                  />
                </Style.AccountSetting_IndividualBigItemContainer>

                <Style.AccountSetting_IndividualBigItemContainer>
                  <Style.AccountSetting_IndividualItemLabel>
                    Skills
                  </Style.AccountSetting_IndividualItemLabel>

                  <Style.AccountSetting_IndividualItemBigInput
                    name="Skills"
                    onChange={(e) =>
                      setJobSeeker({
                        ...jobSeeker,
                        Skills: e.target.value,
                      })
                    }
                    value={jobSeeker.Skills}
                    type="text"
                    variant="outlined"
                    placeholder="Skills"
                  />
                </Style.AccountSetting_IndividualBigItemContainer>
                {showError && (
                  <Style.AccountSetting_IndividualItemLabel
                    style={{
                      width: "100%",
                      textAlign: "center",
                      color: "green",
                      marginBottom: "24px",
                      fontSize: "20px",
                    }}
                  >
                    Please Complete the form
                  </Style.AccountSetting_IndividualItemLabel>
                )}

                <Style.AccountSetting_IndividualItemButtonDiv>
                  <Style.AccountSetting_IndividualItemButton
                    onClick={() =>
                      navigate(`/account/home/${authData?.result._id}`)
                    }
                    variant="outlined"
                  >
                    cancel
                  </Style.AccountSetting_IndividualItemButton>

                  <Style.AccountSetting_IndividualItemButton
                    onClick={handleSubmit}
                    variant="contained"
                  >
                    save changes
                  </Style.AccountSetting_IndividualItemButton>
                </Style.AccountSetting_IndividualItemButtonDiv>
              </Style.AccountSetting_FirstSectionSubDiv>
            </Style.AccountSetting_FirstSection>
          </>
        )}

        {authData?.result.CompanyWebsite && !showDelete && (
          <>
            <Style.AccountSetting_Header>
              <Style.AccountSetting_HeaderDiv>
                <Style.AccountSetting_HeaderParagraph
                  className={showSectionShow == "profile" && "profileSelection"}
                  onClick={handleShowSectionProfile}
                >
                  Profile
                </Style.AccountSetting_HeaderParagraph>
                <Style.AccountSetting_HeaderParagraph
                  className={showSectionShow == "setting" && "profileSelection"}
                  onClick={handleShowSectionSetting}
                >
                  Setting
                </Style.AccountSetting_HeaderParagraph>
              </Style.AccountSetting_HeaderDiv>
            </Style.AccountSetting_Header>
            <Style.AccountSetting_FirstSection>
              <Style.AccountSetting_FirstSectionSubDiv>
                <Style.AccountSetting_IndividualItemContainer>
                  <Style.AccountSetting_IndividualItemLabel>
                    fullName
                  </Style.AccountSetting_IndividualItemLabel>

                  <Style.AccountSetting_IndividualItemSmallInput
                    name="fullName"
                    type="text"
                    onChange={(e) =>
                      setEmployerData({
                        ...employerData,
                        fullName: e.target.value,
                      })
                    }
                    value={employerData.fullName}
                    variant="outlined"
                    placeholder="Full Name"
                    fullWidth
                  />
                </Style.AccountSetting_IndividualItemContainer>

                <Style.AccountSetting_IndividualItemContainer>
                  <Style.AccountSetting_IndividualItemLabel>
                    email
                  </Style.AccountSetting_IndividualItemLabel>

                  <Style.AccountSetting_IndividualItemSmallInput
                    name="email"
                    value={employerData.email}
                    type="email"
                    variant="outlined"
                    placeholder="Email Address"
                  />
                </Style.AccountSetting_IndividualItemContainer>

                <Style.AccountSetting_IndividualItemContainer>
                  <Style.AccountSetting_IndividualItemLabel>
                    Company Representative
                  </Style.AccountSetting_IndividualItemLabel>

                  <Style.AccountSetting_IndividualItemSmallInput
                    name="CompanyRepresentative"
                    type="text"
                    onChange={(e) =>
                      setEmployerData({
                        ...employerData,
                        CompanyRepresentative: e.target.value,
                      })
                    }
                    value={employerData.CompanyRepresentative}
                    variant="outlined"
                    placeholder="Company Representative"
                    fullWidth
                  />
                </Style.AccountSetting_IndividualItemContainer>

                <Style.AccountSetting_IndividualItemContainer>
                  <Style.AccountSetting_IndividualItemLabel>
                    About Company
                  </Style.AccountSetting_IndividualItemLabel>

                  <Style.AccountSetting_IndividualItemSmallInput
                    name="AboutCompany"
                    type="text"
                    onChange={(e) =>
                      setEmployerData({
                        ...employerData,
                        AboutCompany: e.target.value,
                      })
                    }
                    value={employerData.AboutCompany}
                    variant="outlined"
                    placeholder="About Company"
                    fullWidth
                  />
                </Style.AccountSetting_IndividualItemContainer>

                <Style.AccountSetting_IndividualItemContainer>
                  <Style.AccountSetting_IndividualItemLabel>
                    Address
                  </Style.AccountSetting_IndividualItemLabel>

                  <Style.AccountSetting_IndividualItemSmallInput
                    name="Address"
                    type="text"
                    onChange={(e) =>
                      setEmployerData({
                        ...employerData,
                        Address: e.target.value,
                      })
                    }
                    value={employerData.Address}
                    variant="outlined"
                    placeholder="Address"
                    fullWidth
                  />
                </Style.AccountSetting_IndividualItemContainer>

                <Style.AccountSetting_IndividualItemContainer>
                  <Style.AccountSetting_IndividualItemLabel>
                    Company Size
                  </Style.AccountSetting_IndividualItemLabel>

                  <Style.AccountSetting_IndividualItemSmallInput
                    name="CompanySize"
                    type="number"
                    onChange={(e) =>
                      setEmployerData({
                        ...employerData,
                        CompanySize: e.target.value,
                      })
                    }
                    value={employerData.CompanySize}
                    variant="outlined"
                    placeholder="Company Size"
                    fullWidth
                  />
                </Style.AccountSetting_IndividualItemContainer>

                <Style.AccountSetting_IndividualItemContainer>
                  <Style.AccountSetting_IndividualItemLabel>
                    Company Website
                  </Style.AccountSetting_IndividualItemLabel>

                  <Style.AccountSetting_IndividualItemSmallInput
                    name="CompanyWebsite"
                    type="text"
                    onChange={(e) =>
                      setEmployerData({
                        ...employerData,
                        CompanyWebsite: e.target.value,
                      })
                    }
                    value={employerData.CompanyWebsite}
                    variant="outlined"
                    placeholder="Company Website"
                    fullWidth
                  />
                </Style.AccountSetting_IndividualItemContainer>

                {showError && (
                  <Style.AccountSetting_IndividualItemLabel
                    style={{
                      width: "100%",
                      textAlign: "center",
                      color: "green",
                      marginBottom: "24px",
                      fontSize: "20px",
                    }}
                  >
                    Please Complete the form
                  </Style.AccountSetting_IndividualItemLabel>
                )}

                <Style.AccountSetting_IndividualItemButtonDiv>
                  <Style.AccountSetting_IndividualItemButton
                    onClick={() =>
                      navigate(`/account/home/${authData?.result._id}`)
                    }
                    variant="outlined"
                  >
                    cancel
                  </Style.AccountSetting_IndividualItemButton>

                  <Style.AccountSetting_IndividualItemButton
                    onClick={handleSubmit}
                    variant="contained"
                  >
                    save changes
                  </Style.AccountSetting_IndividualItemButton>
                </Style.AccountSetting_IndividualItemButtonDiv>
              </Style.AccountSetting_FirstSectionSubDiv>
            </Style.AccountSetting_FirstSection>
          </>
        )}
      </Style.AccountSetting_Main>

      {popUp && (
        <Style.AccountSetting_PopUp>
          <Style.AccountSetting_PopUpDiv>
            <Style.AccountSetting_PopUpDivImageContainer>
              <Style.AccountSetting_PopUpDivImage
                src={require("../../../image/Success.png")}
                alt="img"
              />
            </Style.AccountSetting_PopUpDivImageContainer>

            <Style.AccountSetting_PopUpDivText>
              changes made successfully
            </Style.AccountSetting_PopUpDivText>

            <Style.AccountSetting_PopUpDivCancel
              onClick={() => setPopUp(false)}
            >
              <RxCross2 />
            </Style.AccountSetting_PopUpDivCancel>
          </Style.AccountSetting_PopUpDiv>
        </Style.AccountSetting_PopUp>
      )}
    </Style.AccountSetting>
  );
};

export default Accounsetting;
