import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { customerSignUp, employerSignUp } from "../../action/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AppSignUp = ({ field }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);
  const [showDataBaseError, setShowDatabaseError] = useState(false);
  const [customerButtonText, setCustomerButtonText] =
    useState("create an account");
  const [employerButtonText, setEmployerButtonText] =
    useState("create an account");

  console.log(field);

  const initialVariable = {
    fullName: "",
    email: "",
    PassWord: "",
    field: field,
  };

  const initialEmployerVariable = {
    fullName: "",
    email: "",
    PassWord: "",
    field: field,
    CompanyRepresentative: "",
  };

  const [profileField, setProfileField] = useState(
    field == "customer" ? initialVariable : initialEmployerVariable
  );
  const [showVerify, setShowVerify] = useState(false);

  const { authError, isLoading } = useSelector((state) => state.auth);
  console.log(authError);
  const dataError = authError;

  const handleCreateAccount = () => {
    if (field == "customer") {
      if (
        profileField.fullName &&
        profileField.email &&
        profileField.PassWord
      ) {
        setCustomerButtonText("Loading...");
        dispatch(customerSignUp(profileField, navigate));
        setShowError(false);
      } else {
        setShowError(true);
      }
    } else if (field == "employer") {
      if (
        profileField.CompanyRepresentative &&
        profileField.fullName &&
        profileField.email &&
        profileField.PassWord
      ) {
        setEmployerButtonText("Loading...");
        dispatch(employerSignUp(profileField, navigate));
        setShowError(false);
      } else {
        setShowError(true);
      }
    }
  };

  return (
    <Style.AppSignUp>
      <Style.AppSignUp_Container>
        <Style.AppSignUp_Header_Container>
          <Style.AppSignUp_Header_ImageContainer>
            <Style.AppSignUp_Header_Image
              src={require("../../image/Logomark.png")}
              alt="img"
            />
          </Style.AppSignUp_Header_ImageContainer>

          <Style.AppSignUp_Header>Create an account</Style.AppSignUp_Header>
        </Style.AppSignUp_Header_Container>

        {field == "customer" && (
          <>
            <Style.AppSignUp_SectionContainer>
              <Style.AppSignUp_SectionContainer_InputBox>
                <Style.AppSignUp_SectionContainer_InputInnerBox>
                  <Style.AppSignUp_SectionContainer_InputInnerSpan>
                    Full name
                  </Style.AppSignUp_SectionContainer_InputInnerSpan>

                  <Style.AppSignUp_SectionContainerInput
                    required
                    name="fullName"
                    onChange={(e) =>
                      setProfileField({
                        ...profileField,
                        fullName: e.target.value,
                      })
                    }
                    value={profileField.fullName}
                    type="text"
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your full name"
                  />
                </Style.AppSignUp_SectionContainer_InputInnerBox>

                <Style.AppSignUp_SectionContainer_InputInnerBox>
                  <Style.AppSignUp_SectionContainer_InputInnerSpan>
                    Email
                  </Style.AppSignUp_SectionContainer_InputInnerSpan>

                  <Style.AppSignUp_SectionContainerInput
                    required
                    name="email"
                    onChange={(e) =>
                      setProfileField({
                        ...profileField,
                        email: e.target.value,
                      })
                    }
                    value={profileField.email}
                    type="email"
                    variant="outlined"
                    placeholder="Email"
                  />
                </Style.AppSignUp_SectionContainer_InputInnerBox>

                <Style.AppSignUp_SectionContainer_InputInnerBox>
                  <Style.AppSignUp_SectionContainer_InputInnerSpan>
                    Password
                  </Style.AppSignUp_SectionContainer_InputInnerSpan>

                  <Style.AppSignUp_SectionContainerInput
                    required
                    name="PassWord"
                    onChange={(e) =>
                      setProfileField({
                        ...profileField,
                        PassWord: e.target.value,
                      })
                    }
                    value={profileField.PassWord}
                    type="password"
                    variant="outlined"
                    placeholder="Password"
                  />
                </Style.AppSignUp_SectionContainer_InputInnerBox>
              </Style.AppSignUp_SectionContainer_InputBox>

              <Style.AppSignUp_SectionContainerButton
                onClick={handleCreateAccount}
                variant="contained"
              >
                {customerButtonText}
              </Style.AppSignUp_SectionContainerButton>

              {showError && (
                <Style.AppSignUp_SectionBottomTextPopUp>
                  Please Complete the Form
                </Style.AppSignUp_SectionBottomTextPopUp>
              )}
              {!showError && !showVerify && authError != null && (
                <Style.AppSignUp_SectionBottomTextPopUp>
                  {dataError}
                </Style.AppSignUp_SectionBottomTextPopUp>
              )}
              <Link
                to="/account/signIn"
                style={{ color: "black", textDecoration: "none" }}
              >
                <Style.AppSignUp_SectionBottomText>
                  already have an account?{" "}
                  <Style.AppSignUp_SectionBottomSpan>
                    log in
                  </Style.AppSignUp_SectionBottomSpan>
                </Style.AppSignUp_SectionBottomText>
              </Link>
            </Style.AppSignUp_SectionContainer>
          </>
        )}

        {field == "employer" && (
          <>
            <Style.AppSignUp_SectionContainer>
              <Style.AppSignUp_SectionContainer_InputBox>
                <Style.AppSignUp_SectionContainer_InputInnerBox>
                  <Style.AppSignUp_SectionContainerInputDiv>
                    <Style.AppSignUp_SectionContainerInputHalfContainer>
                      <Style.AppSignUp_SectionContainer_InputInnerSpan>
                        Company Name
                      </Style.AppSignUp_SectionContainer_InputInnerSpan>

                      <Style.AppSignUp_SectionContainerInputHalf
                        required
                        name="fullName"
                        onChange={(e) =>
                          setProfileField({
                            ...profileField,
                            fullName: e.target.value,
                          })
                        }
                        value={profileField.fullName}
                        type="text"
                        fullWidth
                        variant="outlined"
                        placeholder="Company name"
                      />
                    </Style.AppSignUp_SectionContainerInputHalfContainer>

                    <Style.AppSignUp_SectionContainerInputHalfContainer>
                      <Style.AppSignUp_SectionContainer_InputInnerSpan>
                        Company Email
                      </Style.AppSignUp_SectionContainer_InputInnerSpan>

                      <Style.AppSignUp_SectionContainerInput
                        required
                        name="email"
                        onChange={(e) =>
                          setProfileField({
                            ...profileField,
                            email: e.target.value,
                          })
                        }
                        value={profileField.email}
                        type="email"
                        variant="outlined"
                        placeholder="Company Email"
                      />
                    </Style.AppSignUp_SectionContainerInputHalfContainer>
                  </Style.AppSignUp_SectionContainerInputDiv>
                </Style.AppSignUp_SectionContainer_InputInnerBox>

                <Style.AppSignUp_SectionContainer_InputInnerBox>
                  <Style.AppSignUp_SectionContainer_InputInnerSpan>
                    Company Representative
                  </Style.AppSignUp_SectionContainer_InputInnerSpan>

                  <Style.AppSignUp_SectionContainerInput
                    required
                    name="CompanyRepresentative"
                    onChange={(e) =>
                      setProfileField({
                        ...profileField,
                        CompanyRepresentative: e.target.value,
                      })
                    }
                    value={profileField.CompanyRepresentative}
                    type="text"
                    variant="outlined"
                    placeholder="Company Representative"
                  />
                </Style.AppSignUp_SectionContainer_InputInnerBox>

                <Style.AppSignUp_SectionContainer_InputInnerBox>
                  <Style.AppSignUp_SectionContainer_InputInnerSpan>
                    Password
                  </Style.AppSignUp_SectionContainer_InputInnerSpan>

                  <Style.AppSignUp_SectionContainerInput
                    required
                    name="PassWord"
                    onChange={(e) =>
                      setProfileField({
                        ...profileField,
                        PassWord: e.target.value,
                      })
                    }
                    value={profileField.PassWord}
                    type="password"
                    variant="outlined"
                    placeholder="Password"
                  />
                </Style.AppSignUp_SectionContainer_InputInnerBox>
              </Style.AppSignUp_SectionContainer_InputBox>

              <Style.AppSignUp_SectionContainerButton
                onClick={handleCreateAccount}
                variant="contained"
              >
                {employerButtonText}
              </Style.AppSignUp_SectionContainerButton>
              {showError && (
                <Style.AppSignUp_SectionBottomTextPopUp>
                  Please Complete the Form
                </Style.AppSignUp_SectionBottomTextPopUp>
              )}

              {!showError && !showVerify && authError != null && (
                <Style.AppSignUp_SectionBottomTextPopUp>
                  {dataError}
                </Style.AppSignUp_SectionBottomTextPopUp>
              )}
              <Link
                to="/account/signIn"
                style={{ color: "black", textDecoration: "none" }}
              >
                <Style.AppSignUp_SectionBottomText>
                  already have an account?
                  <Style.AppSignUp_SectionBottomSpan>
                    log in
                  </Style.AppSignUp_SectionBottomSpan>
                </Style.AppSignUp_SectionBottomText>
              </Link>
            </Style.AppSignUp_SectionContainer>
          </>
        )}
      </Style.AppSignUp_Container>

      {showVerify && (
        <Style.AppSignUp_PopUP>
          <Style.AppSignUp_PopUPContainer>
            <Style.AppSignUp_PopUPIconDiv>
              <Style.AppSignUp_Header_Image
                src={require("../../image/Featuredicon.png")}
                alt="img"
              />
            </Style.AppSignUp_PopUPIconDiv>

            <Style.AppSignUp_DescriptionDiv>
              <Style.AppSignUp_PopUpDescriptionHeader>
                {authError == "User already exist"
                  ? "User already exist"
                  : "please check our email"}
              </Style.AppSignUp_PopUpDescriptionHeader>

              <Style.AppSignUp_PopUpDescriptionSubHeader>
                {authError == "User already exist"
                  ? "User already exist , Please try using another email"
                  : `we have sent an link to ${profileField.email} for verification`}
              </Style.AppSignUp_PopUpDescriptionSubHeader>
            </Style.AppSignUp_DescriptionDiv>

            {authError == "User already exist" ? (
              <Style.AppSignUp_PopUpResendLink style={{ marginTop: "-15px" }}>
                We can't send you verification mail because the user already
                exist
              </Style.AppSignUp_PopUpResendLink>
            ) : (
              <Style.AppSignUp_PopUpResendLink>
                <Style.AppSignUp_PopUpResendLinkSpan>
                  click to resend
                </Style.AppSignUp_PopUpResendLinkSpan>
              </Style.AppSignUp_PopUpResendLink>
            )}
          </Style.AppSignUp_PopUPContainer>
        </Style.AppSignUp_PopUP>
      )}
    </Style.AppSignUp>
  );
};

export default AppSignUp;
