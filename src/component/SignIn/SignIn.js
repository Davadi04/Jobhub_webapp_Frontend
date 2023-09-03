import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Signin } from "../../action/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialVariable = {
    email: "",
    PassWord: "",
  };
  const { authError, authData, isLoading } = useSelector((state) => state.auth);
  console.log(authError);

  const [profileField, setProfileField] = useState(initialVariable);
  const [showSignError, setShowSignError] = useState(true);

  const dataError = authError;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      authError != "User doesn't exist" ||
      authError != "Invalid Credentials" ||
      authError == null
    ) {
      console.log("fghjk");
      dispatch(Signin(profileField, navigate));
      setShowSignError(true);
    } else if (
      authError == "User doesn't exist" ||
      authError == "Invalid Credentials"
    ) {
      setShowSignError(true);
    }
  };

  return (
    <Style.SignIn>
      <Style.SignUp_Container>
        <Style.SignUp_Header_Container>
          <Style.SignUp_Header_ImageContainer>
            <Style.SignUp_Header_Image
              src={require("../../image/Logomark.png")}
              alt="img"
            />
          </Style.SignUp_Header_ImageContainer>

          <Style.SignUp_Header>Create an account</Style.SignUp_Header>
        </Style.SignUp_Header_Container>

        <Style.SignUp_SectionContainer_InputBox>
          <Style.SignUp_SectionContainer_InputInnerBox>
            <Style.SignUp_SectionContainer_InputInnerSpan>
              Email
            </Style.SignUp_SectionContainer_InputInnerSpan>

            <Style.SignUp_SectionContainerInput
              required
              name="email"
              onChange={(e) =>
                setProfileField({ ...profileField, email: e.target.value })
              }
              value={profileField.email}
              type="email"
              variant="outlined"
              placeholder="Email"
            />
          </Style.SignUp_SectionContainer_InputInnerBox>

          <Style.SignUp_SectionContainer_InputInnerBox>
            <Style.SignUp_SectionContainer_InputInnerSpan>
              Password
            </Style.SignUp_SectionContainer_InputInnerSpan>

            <Style.SignUp_SectionContainerInput
              required
              name="PassWord"
              onChange={(e) =>
                setProfileField({ ...profileField, PassWord: e.target.value })
              }
              value={profileField.PassWord}
              type="password"
              variant="outlined"
              placeholder="Password"
            />
          </Style.SignUp_SectionContainer_InputInnerBox>
        </Style.SignUp_SectionContainer_InputBox>

        {showSignError && (
          <Style.SignUp_Header
            style={{
              width: "380px",
              textAlign: "center",
              color: "green",
              marginBottom: "24px",
              fontSize: "16px",
            }}
          >
            {dataError}
          </Style.SignUp_Header>
        )}

        <Style.SignUp_SectionContainerButton
          onClick={(e) => handleSubmit(e)}
          variant="contained"
        >
          Sign in
        </Style.SignUp_SectionContainerButton>

        <Link
          to="/account/signUp"
          style={{ color: "black", textDecoration: "none" }}
        >
          <Style.SignUp_SectionBottomText>
            Don't have an account?{" "}
            <Style.SignUp_SectionBottomSpan>
              Sign up
            </Style.SignUp_SectionBottomSpan>
          </Style.SignUp_SectionBottomText>
        </Link>
      </Style.SignUp_Container>
    </Style.SignIn>
  );
};

export default SignIn;
