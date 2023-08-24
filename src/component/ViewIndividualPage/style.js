import { styled, TextField, MenuItem, Button } from "@mui/material";

export const ViewIndividualPage = styled("div")({
  width: "100vw",
  height: "fit-content",
  overflowX: "hidden",
});

export const ViewIndividualPageContainer = styled("div")({
  width: "100%",
  height: "fit-content",
  padding: "24px 100px 24px 100px",
  display: "flex",
  backgroundColor: "whitesmoke",
  overflowX: "hidden",
  "@media (max-width : 57.5em)": {
    padding: "14px 40px 14px 40px",
    display: "block",
  },
});
export const ViewIndividualPageApplyPopUp = styled("div")({
  width: "100%",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  backgroundColor: "whitesmoke",
});

export const ViewIndividualPageApplyPopUpDiv = styled("div")({
  width: "540px",
  height: "380px",
  boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.2)",
  padding: "24px",
  backgroundColor: "white",
  borderRadius: "12px",

  "@media (max-width : 40.625em)": {
    width: "85%",
    height: "300px",
  },
  "@media (max-width : 28.125em)": {
    width: "80%",
  },
});

export const ViewIndividualPageApplyPopUpIconDivImg = styled("img")({
  width: "100%",
  height: "100%",
});

export const ViewIndividualPageApplyPopUpIconDiv = styled("div")({
  width: "50px",
  height: "50px",
  border: "15px solid #EEF4FF",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "15px",
  "@media (max-width : 28.125em)": {
    width: "40px",
    height: "40px",
    border: "10px solid #EEF4FF",
  },
});

export const ViewIndividualPageApplyPopUpDeleteDiv = styled("div")({
  width: "480px",
  height: "44px",
  display: "flex",
  justifyContent: "space-between",
  marginTop: "5px",
  "@media (max-width : 40.625em)": {
    width: "100%",
    height: "34px",
  },
});

export const ViewIndividualPageApplyPopUpButtonDiv = styled("div")({
  width: "480px",
  height: "150px",
  marginTop: "20px",
  "@media (max-width : 40.625em)": {
    width: "100%",
    height: "100px",
  },
});

export const ViewIndividualPageApplyPopUpButton = styled("div")({
  width: "460px",
  height: "50px",
  cursor: "pointer",
  border: "1px solid #A4BCFD",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
  borderRadius: "8px",
  "@media (max-width : 40.625em)": {
    width: "100%",
    height: "40px",
  },
});

export const ViewIndividualPageApplyPopUpButtonIconDiv = styled("div")({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  border: "5px solid  #EEF4FF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "20px",
  "@media (max-width : 28.125em)": {
    width: "30px",
    height: "30px",
    border: "3.5px solid  #EEF4FF",
  },
});

export const ViewIndividualPageApplyPopUpText = styled("p")({
  fontSize: "18px",
  "@media (max-width : 28.125em)": {
    fontSize: "15px",
  },
});

export const ViewIndividualPageApplyPopUpButtonText = styled("h3")({
  fontSize: "14px",
  "@media (max-width : 28.125em)": {
    fontSize: "12px",
  },
});

export const VerifyScreenFirstContainer = styled("div")({
  width: "650px",
  height: "fit-content",
  borderRadius: "8px",
  padding: "32px  52px 32px 52px",
  border: "1px solid lightgrey",
  marginRight: "25px",
  backgroundColor: "white",

  "@media (max-width : 57.5em)": {
    width: "100%",
    marginBottom: "15px",
  },
});

export const VerifyScreenSecondContainer = styled("div")({
  width: "380px",
  height: "fit-content",
  padding: "32px",
  borderRadius: "8px",
  border: "1px solid lightgrey",
  backgroundColor: "white",

  "@media (max-width : 57.5em)": {
    width: "100%",
  },
});

export const VerifyScreenSecondContainerButtonDiv = styled("div")({
  width: "320px",
  height: "95px",
  marginTop: "10px",
  "@media (max-width : 57.5em)": {
    width: "100%",
  },
});

export const VerifyScreenSecondContainerButton = styled(Button)({
  width: "320px",
  height: "44px",
  marginBottom: "10px",
  textTransform: "capitalize",

  "@media (max-width : 57.5em)": {
    width: "100%",
  },
});

export const VerifyScreenFirstContainerBoxRoleAndEdit = styled("div")({
  width: "550px",
  height: "56px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
});

export const VerifyScreenFirstContainerDesc = styled("div")({
  width: "550px",
  height: "55px",

  overflow: "hidden",
});

export const VerifyScreenFirstContainerType = styled("div")({
  width: "550px",
  height: "24px",
});

export const VerifyScreenFirstContainerMain = styled("div")({
  width: "550px",
  // height: "80%",

  marginTop: "25px",
  borderRadius: "4px",
});

export const VerifyScreenFirstContainerMainDiv = styled("div")({
  width: "550px",
  height: "fit-content",
  // border : "1px solid lightgrey",
  // backgroundColor: "#F2F4F7",
  padding: "10px  10px 10px  0px",
  borderRadius: "4px",
  marginBottom: "1rem",
});

////////////////////////////////////
//////// ApplyPage

export const ApplyPage = styled("div")({
  width: "100%",
  height: "fit-content",
  padding: "24px 100px 24px 100px",
  backgroundColor: "whitesmoke",
  overflow: "hidden",
  "@media (max-width : 57.5em)": {
    padding: "14px 50px 14px 50px",
  },
  "@media (max-width : 41em)": {
    padding: "10px 40px 10px 40px",
  },
});

export const ApplyPageDiv = styled("div")({
  width: "1150px",
  height: "fit-content",
  boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.2)",
  borderRadius: "8px",
  padding: "32px 52px 32px 82px",
  backgroundColor: "white",

  "@media (max-width : 57.5em)": {
    width: "100%",
    padding: "32px 22px 32px 42px",
  },
  "@media (max-width : 41em)": {
    width: "100%",
    padding: "32px 12px 32px 22px",
  },
});

export const ApplyPageDivLinkDiv = styled("div")({
  width: "880px",
  height: "24px",
  display: "flex",
  //  marginBottom: "10px",
  //justifyContent: "center",
  alignItems: "center",
  "@media (max-width : 57.5em)": {
    width: "100%",
  },
  "@media (max-width : 36em)": {
    display: "block",
  },
});

export const ApplyPageDivHeader = styled("p")({
  fontSize: "18px",
  "@media (max-width : 36em)": {
    fontSize: "16px",
    marginBottom: "10px",
  },
});

export const ApplyPageDivEmailHeader = styled("p")({
  fontSize: "14px",
  marginRight: "20px",
  "@media (max-width : 36em)": {
    fontSize: "12px",
    marginBottom: "10px",
  },
});

export const ApplyPageDivMainDiv = styled("div")({
  width: "880px",
  height: "fit-content",
  // border : "1px solid lightgrey",
  //backgroundColor: "#F2F4F7",
  padding: "10px  10px 10px  0px",
  borderRadius: "4px",
  marginTop: "15px",
  "@media (max-width : 57.5em)": {
    width: "100%",
  },
});

export const ApplyPageDivMainDiv_IndividualItemButtonDiv = styled("div")({
  width: "950px",
  height: "44px",
  display: "flex",
  alignItems: "center",
  marginTop: "80px",
  justifyContent: "space-between",
  "@media (max-width : 57.5em)": {
    width: "100%",
  },
});

export const AccountSetting_IndividualItemButton = styled(Button)({
  width: "412px",
  height: "44px",
  //  backgroundColor : "#444CE7",
  borderRadius: "8px",
  fontSize: "16px",
  "@media (max-width : 56.7em)": {
    width: "150px",
  },
  "@media (max-width : 41em)": {
    width: "100px",
    fontSize: "13px",
  },
  "@media (max-width : 28.2em)": {
    width: "80px",
    fontSize: "9.5px",
  },
});

/////////////////////////////////////////////////////////////
/////////////// Applicants

export const Applicants = styled("div")({
  width: "100%",
  height: "fit-content",
  padding: "24px 100px 24px 100px",
  backgroundColor: "whitesmoke",
  overflow: "hidden",
  "@media (max-width : 57.5em)": {
    padding: "14px 40px 14px 40px",
  },
});
export const Applicants_Header = styled("h3")({
  fontSize: "18px",
  textTransform: "capitalize",
  textAlign: "center",
  marginBottom: "15px",
  "@media (max-width : 57.5em)": {
    fontSize: "16px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "15px",
  },
});
export const Applicants_Para = styled("p")({
  fontSize: "16px",
  fontWeight: "bold",
  textTransform: "capitalize",
  marginBottom: "10px",
  "@media (max-width : 57.5em)": {
    fontSize: "13px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "11px",
  },
});
export const ApplicantSection = styled("div")({
  width: "100%",
  height: "fit-content",
});

export const ApplicantSectionMain = styled("div")({
  border: "1px solid lightgrey",
  width: "1180px",
  height: "fit-content",
  backgroundColor: "white",
  borderRadius: "8px",
  padding: "15px",
  marginBottom: "20px",
  "@media (max-width : 57.5em)": {
    width: "100%",
  },
});
