import { styled, TextField, MenuItem, Button } from "@mui/material";

export const SignIn = styled("div")({
  width: "100vw",
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  flexDirection: "column",
});

export const SignUp_Container = styled("div")({
  width: "362.11px",
  height: "538.03px",
  position: "absolute",
  top: "100px",
  left: "518px",
  zIndex: "20",
  "@media (max-width : 75em)": {
    left: "400px",
    top: "100px",
  },
  "@media (max-width : 62.5em)": {
    left: "300px",
    top: "100px",
  },
  "@media (max-width : 56.25em)": {
    left: "250px",
    top: "100px",
    height: "400.03px",
  },
  "@media (max-width : 50em)": {
    left: "200px",
    top: "100px",
  },
  "@media (max-width : 43.75em)": {
    left: "150px",
    top: "100px",
  },
  "@media (max-width : 37.5em)": {
    left: "100px",
    top: "100px",
  },
  "@media (max-width : 28.5em)": {
    left: "80px",
    top: "100px",
  },
  "@media (max-width : 25em)": {
    left: "65px",
    top: "100px",
  },
});

export const SignUp_Header_ImageContainer = styled("div")({
  width: "50px",
  height: "50px",
  "@media (max-width : 37.5em)": {
    width: "35px",
    height: "35px",
  },
});

export const SignUp_Header_Image = styled("img")({
  width: "100%",
  height: "100%",
});

export const SignUp_Header_Container = styled("div")({
  width: "100%",
  height: "130px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  "@media (max-width : 37.5em)": {
    width: "75%",
  },
});

export const SignUp_SectionContainer_InputBox = styled("div")({
  width: "361.34px",
  height: "164.27px",
  "@media (max-width : 37.5em)": {
    width: "261.34px",
  },
});

export const SignUp_SectionContainer_InputInnerBox = styled("div")({
  width: "362.11px",
  height: "59.89px",
  marginBottom: "5px",
  "@media (max-width : 37.5em)": {
    width: "261.34px",
  },
});

export const SignUp_SectionContainer_InputInnerSpan = styled("div")({
  width: "fit-content",
  height: "17px",
  fontSize: "14px",
});

export const SignUp_Header = styled("h3")({
  fontSize: "20.21px",
  textTransform: "capitalize",
  "@media (max-width : 37.5em)": {
    fontSize: "16.21px",
  },
});

export const SignUp_EmailSignUp = styled("p")({
  fontSize: "1rem",
  textTransform: "capitalize",
  textAlign: "center",
  color: "green",
  marginBottom: "1rem",
});

export const SignUp_SectionContainer = styled("div")({});

export const SignUp_SectionContainerForm = styled("form")({
  width: "100%",
  height: "95%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  padding: "0rem",
});

export const SignUp_SectionContainerInput = styled("input")({
  width: "100%",
  height: "37.84px",
  borderRadius: "1px",
  border: "1px solid lightgrey",
  outline: "none",
  //  border :"1px solid grey"
});

export const SignUp_SectionContainerButton = styled(Button)({
  width: "362.11px",
  height: "45.07px",
  color: "white",
  backgroundColor: "#444CE7",
  borderRadius: "7px",
  fontSize: "13px",
  marginBottom: "20px",
  "@media (max-width : 37.5em)": {
    width: "261.34px",
  },
});

export const SignUp_ForgetPasswordDiv = styled("div")({
  width: "361.34px",
  height: "21px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "14px",
  "@media (max-width : 37.5em)": {
    width: "261.34px",
    display: "none",
  },
});

export const SignUp_ForgetPasswordInputDiv = styled("div")({
  width: "177.09px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  //  justifyContent : "space-around"
});

export const SignUp_ForgetPasswordInput = styled("input")({
  marginRight: "5px",
});

export const SignUp_ForgetPasswordText = styled("p")({
  fontSize: "14px",
  textTransform: "capitalize",
});

export const SignUp_ForgetPasswordLink = styled("p")({
  fontSize: "14px",
  color: "#3538CD",
  textTransform: "capitalize",
  cursor: "pointer",
});

export const SignUp_SectionBottomText = styled("p")({
  fontSize: "14.05px",
  textTransform: "capitalize",
  cursor: "pointer",
  width: "205px",
  "@media (max-width : 37.5em)": {
    fontSize: "11.05px",
    textAlign: "center",
  },
});

export const SignUp_SectionBottomSpan = styled("span")({
  fontSize: "14.05px",
  color: "blue",
});
