import React, { useState, useEffect } from "react";
import * as Style from "../JobSeeker/style";
import * as Styling from "./style";
import { AiOutlineCheck } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { country_list } from "../../../ListOfCountries";
import { FinalsignUp } from "../../../action/auth";
import { LOGOUT } from "../../../constants/actionType";

const EmployerCompleteProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authData, isLoading } = useSelector((state) => state.auth);
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("profile"))
  );

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("profile")));
    if (
      user.AboutCompany &&
      user.Address &&
      user.CompanySize &&
      user.CompanyWebsite &&
      user.Location
    ) {
      dispatch({ type: LOGOUT });
    }
  }, []);

  const initialVariable = {
    id: user?.result._id || authData?.result._id,
    CompanySize: "",
    AboutCompany: "",
    CompanyWebsite: "",
    Address: "",
    Location: "",
  };

  const [profileField, setProfileField] = useState(initialVariable);

  const handleCreateAccountSubmit = (e) => {
    e.preventDefault();
    if (
      profileField.AboutCompany &&
      profileField.Address &&
      profileField.CompanySize &&
      profileField.CompanyWebsite &&
      profileField.Location
    ) {
      dispatch(FinalsignUp(profileField, navigate));
    }
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
              Fill in company’s information
            </Style.JobSeeker_ProfileStepsSecondPara>
            <Style.JobSeeker_ProfileStepsIconHolder>
              <AiOutlineCheck />
            </Style.JobSeeker_ProfileStepsIconHolder>
          </Style.JobSeeker_ProfileStepsDiv>
        </Style.JobSeeker_ProfileStepsCont>
        <Style.JobSeeker_ProfileStepsImageContainer></Style.JobSeeker_ProfileStepsImageContainer>
      </Style.JobSeeker_ProfileSteps>

      <Style.JobSeeker_ProfileDetails>
        <Style.JobSeeker_ProfileDetailsDiv>
          <Style.JobSeeker_ProfileDetailsInnerBioContainer>
            <Style.Cv_Span>About Company</Style.Cv_Span>
            <Style.JobSeeker_SectionContainerBioInput
              required
              name="AboutCompany"
              onChange={(e) =>
                setProfileField({
                  ...profileField,
                  AboutCompany: e.target.value,
                })
              }
              value={profileField.AboutCompany}
              type="text"
              variant="outlined"
              placeholder="Enter brief summary"
            />
          </Style.JobSeeker_ProfileDetailsInnerBioContainer>
          <Style.JobSeeker_ProfileDetailsGenderMainContainer>
            <Style.JobSeeker_ProfileDetailsGenderContainer>
              <Style.Cv_Span>Address</Style.Cv_Span>
              <Style.JobSeeker_SectionContainerCompanySizeInput
                required
                name="Address"
                onChange={(e) =>
                  setProfileField({
                    ...profileField,
                    Address: e.target.value,
                  })
                }
                value={profileField.Address}
                type="text"
                variant="outlined"
                placeholder="Enter company Address"
              />
            </Style.JobSeeker_ProfileDetailsGenderContainer>

            <Style.JobSeeker_ProfileDetailsGenderContainer>
              <Style.Cv_Span>Country </Style.Cv_Span>
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
                <Style.Option_Key selected="true">Country</Style.Option_Key>

                {country_list.map((data, index) => (
                  <Style.Option_Key key={index}>{data}</Style.Option_Key>
                ))}
              </Style.Profile_Select>
            </Style.JobSeeker_ProfileDetailsGenderContainer>
          </Style.JobSeeker_ProfileDetailsGenderMainContainer>
          <Style.JobSeeker_ProfileDetailsInnerContainer>
            <Style.Cv_Span>Company Website</Style.Cv_Span>
            <Style.JobSeeker_SectionContainerInput
              required
              name="CompanyWebsite"
              onChange={(e) =>
                setProfileField({
                  ...profileField,
                  CompanyWebsite: e.target.value,
                })
              }
              value={profileField.CompanyWebsite}
              type="text"
              variant="outlined"
              placeholder="Enter company website"
            />
          </Style.JobSeeker_ProfileDetailsInnerContainer>
          <Style.JobSeeker_ProfileDetailsInnerContainer>
            <Style.Cv_Span>Company Size</Style.Cv_Span>
            <Style.JobSeeker_SectionContainerInput
              required
              name="CompanySize"
              onChange={(e) =>
                setProfileField({
                  ...profileField,
                  CompanySize: e.target.value,
                })
              }
              value={profileField.CompanySize}
              type="text"
              variant="outlined"
              placeholder="Enter Company Size"
            />
          </Style.JobSeeker_ProfileDetailsInnerContainer>
          <Style.JobSeeker_SectionContainerButton
            onClick={(e) => handleCreateAccountSubmit(e)}
            variant="contained"
          >
            Proceed
          </Style.JobSeeker_SectionContainerButton>{" "}
        </Style.JobSeeker_ProfileDetailsDiv>
      </Style.JobSeeker_ProfileDetails>
    </Style.JobSeeker>
  );
};

export default EmployerCompleteProfile;
