import {
  styled,
  TextField,
  MenuItem,
  Button,
  FormControl,
} from "@mui/material";

export const AppSignUp = styled("div")({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  flexDirection: "column",
});

export const AppSignUp_Container = styled("div")({
  width: "362.11px",
  height: "443.53px",
  position: "absolute",
  top: "157px",
  left: "516px",
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
    left: "70px",
    top: "100px",
  },
  "@media (max-width : 25em)": {
    left: "65px",
    top: "100px",
  },
});

export const AppSignUp_Header_ImageContainer = styled("div")({
  width: "50px",
  height: "50px",
  "@media (max-width : 37.5em)": {
    width: "40px",
    height: "40px",
  },
});

export const AppSignUp_Header_Image = styled("img")({
  width: "100%",
  height: "100%",
});

export const AppSignUp_Header_Container = styled("div")({
  width: "100%",
  height: "97.21px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  "@media (max-width : 37.5em)": {
    width: "65%",
  },
});

export const AppSignUp_SectionContainer_InputBox = styled("div")({
  width: "362.11px",
  height: "206.63px",
  borderRadius: "10px",
  "@media (max-width : 37.5em)": {
    width: "261.34px",
  },
});

export const AppSignUp_SectionContainer_InputInnerBox = styled("div")({
  width: "362.11px",
  height: "59.89px",
  marginBottom: "10px",
  "@media (max-width : 37.5em)": {
    width: "261.34px",
  },
});
export const AppSignUp_SectionContainerInputDiv = styled("div")({
  width: "100%",
  height: "59.89px",
  display: "flex",
  justifyContent: "space-between",
});

export const AppSignUp_SectionContainerInputHalf = styled("input")({
  width: "174px",
  height: "37.84px",
  borderRadius: "1px",
  border: "1px solid lightgrey",
  outline: "none",
  "@media (max-width : 37.5em)": {
    width: "120.34px",
  },
});

export const AppSignUp_SectionContainerInputHalfContainer = styled("div")({
  width: "174px",
  height: "58px",
});

export const AppSignUp_SectionContainer_InputInnerSpan = styled("div")({
  width: "fit-content",
  height: "17px",
  fontSize: "14px",
});

export const AppForm = styled(FormControl)({});

export const AppSignUp_Header = styled("h3")({
  fontSize: "20.21px",
  textTransform: "capitalize",
  "@media (max-width : 37.5em)": {
    fontSize: "15.21px",
  },
});

export const AppSignUp_EmailSignUp = styled("p")({
  fontSize: "1rem",
  textTransform: "capitalize",
  textAlign: "center",
  color: "green",
  marginBottom: "1rem",
});

export const AppSignUp_SectionContainer = styled("div")({
  width: "50%",
  height: "65%",
  //  border : "1px solid green",
});

export const AppSignUp_SectionContainerForm = styled("form")({
  width: "100%",
  height: "95%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  padding: "0rem",
});

export const AppSignUp_SectionContainerInput = styled("input")({
  width: "100%",
  height: "37.84px",
  borderRadius: "1px",
  border: "1px solid lightgrey",
  outline: "none",

  //  border :"1px solid grey"
});

export const AppSignUp_SectionContainerButton = styled(Button)({
  width: "362.11px",
  height: "37.84px",
  color: "white",
  backgroundColor: "#444CE7",
  borderRadius: "7px",
  fontSize: "13px",
  marginBottom: "20px",
  "@media (max-width : 37.5em)": {
    width: "261.34px",
  },
});

export const AppSignUp_SectionBottom = styled("div")({});

export const AppSignUp_SectionBottomText = styled("p")({
  fontSize: "14.05px",
  textTransform: "capitalize",
  cursor: "pointer",
  width: "205px",
  "@media (max-width : 37.5em)": {
    fontSize: "12.05px",
  },
});

export const AppSignUp_SectionBottomTextPopUp = styled("p")({
  fontSize: "14.05px",
  textTransform: "capitalize",
  cursor: "pointer",
  width: "205px",
  color: "green",
  textAlign: "center",
  marginBottom: "24px",

  "@media (max-width : 37.5em)": {
    fontSize: "12.05px",
    textAlign: "center",
  },
});

export const AppSignUp_SectionBottomSpan = styled("span")({
  fontSize: "14.05px",
  color: "blue",
});

export const AppSignUp_PopUP = styled("div")({
  width: "100vw",
  height: "100vh",
  border: "1px solid grey",
  position: "absolute",
  backgroundColor: "white",
  zIndex: "50",
  top: "0%",
  left: "0%",
});

export const AppSignUp_PopUPContainer = styled("div")({
  width: "316.63px",
  height: "182.71px",
  padding: "10px",
  borderRadius: "9px",
  border: "1px solid lightgrey",
  position: "absolute",
  top: "180px",
  left: "532px",
  display: "flex",
  // justifyContent : "center",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.2)",
});

export const AppSignUp_PopUPIconDiv = styled("div")({
  width: " 37.25px",
  height: " 37.25px",
  marginBottom: "24px",
});

export const AppSignUp_DescriptionDiv = styled("div")({
  width: "279.38px",
  height: " 60.21px",
  marginBottom: "12px",
});

export const AppSignUp_PopUpDescriptionHeader = styled("p")({
  fontSize: "13.97px",
  textTransform: "capitalize",
  textAlign: "center",
  marginBottom: "12px",
});

export const AppSignUp_PopUpDescriptionSubHeader = styled("p")({
  textTransform: "capitalize",
  fontSize: "10.86px",
  textAlign: "center",
});

export const AppSignUp_PopUpResendLink = styled("p")({
  fontSize: "10.86px",
  textTransform: "capitalize",
  cursor: "pointer",
  width: "205px",
  textAlign: "center",
  cursor: "pointer",
});

export const AppSignUp_PopUpResendLinkSpan = styled("span")({
  fontSize: "10.86px",
  color: "blue",
});
