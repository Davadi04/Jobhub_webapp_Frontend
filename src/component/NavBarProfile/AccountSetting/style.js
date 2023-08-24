import { styled, TextField, MenuItem, Button } from "@mui/material";

export const AccountSetting = styled("div")({
  width: "100vw",
  height: "fit-content",
  // padding : "1rem",
  backgroundColor: "whitesmoke",
  display: "flex",
  //  justifyContent : "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
  overflowX: "hidden",
  "@media (max-width : 56.7em)": {},
});

export const AccountSetting_PopUpDelete = styled("div")({
  width: "100vw",
  height: "100vh",
  position: "fixed",
  backgroundColor: "whitesmoke",
  top: "0%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const AccountSetting_PopUpDeleteDiv = styled("div")({
  width: "408px",
  height: "268px",
  borderRadius: "12px",
  backgroundColor: "white",
  padding: "24px",
  border: "1px solid lightgrey",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  "@media (max-width : 56.7em)": {
    width: "320px",
  },
});

export const AccountSetting_PopUp = styled("div")({
  width: "100vw",
  height: "120vh",
  backgroundColor: "transparent",
  position: "fixed",
  top: "0%",
  padding: "8px",
  backdropFilter: "blur(3px) ",
  textAlign: "center",
});

export const AccountSetting_PopUpButtonDeleteDiv = styled("div")({
  width: "100%",
  height: "44px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const AccountSetting_PopUpImgContainer = styled("div")({
  width: "48px",
  height: "48px",
  borderRadius: "28px",
  backgroundColor: "#FDB022",
  marginBottom: "20px",
  fontSize: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: ".5px",
  color: "white",
});

export const AccountSetting_PopUpButtonDelete = styled(Button)({
  width: "174px",
  height: "44px",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width : 56.7em)": {
    width: "120px",
    fontSize: "11px",
  },
});

export const AccountSetting_PopUpHeader = styled("p")({
  //  width: "360px",
  height: "28px",
  fontSize: "18px",
});

export const AccountSetting_PopUpSubHeader = styled("p")({
  // width: "360px",
  height: "40px",
  fontSize: "14px",
});

export const AccountSetting_PopUpDiv = styled("div")({
  width: "370px",
  height: "80px",
  backgroundColor: "white",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  padding: "5px 20px 5px 20px",
  position: "absolute",
  right: "3%",
  border: "1px solid lightgrey",
  zIndex: "200",
  backdropFilter: "blur(3px)",

  "@media (max-width : 56.7em)": {
    width: "200px",
  },
});

export const AccountSetting_PopUpDivImageContainer = styled("div")({
  width: "50px",
  height: "50px",

  "@media (max-width : 56.7em)": {
    width: "30px",
    height: "40px",
  },
});

export const AccountSetting_PopUpDivCancel = styled("div")({
  width: "10px",
  height: "10px",
  fontSize: "20px",
  position: "absolute",
  right: "4%",
  top: "6%",
  cursor: "pointer",
});

export const AccountSetting_PopUpDivImage = styled("img")({
  width: "50px",
  height: "50px",
  "@media (max-width : 56.7em)": {
    width: "40px",
    height: "40px",
  },
});

export const AccountSetting_PopUpDivText = styled("p")({
  fontSize: "24px",
  textTransform: "capitalize",
  "@media (max-width : 56.7em)": {
    fontSize: "16px",
  },
});

export const AccountSetting_Main = styled("div")({
  width: "940px",
  height: "1318px",
  "@media (max-width : 56.7em)": {
    width: "85%",
  },
});

export const AccountSetting_FirstSection = styled("div")({
  width: "100%",
  height: "fit-content",
  border: "1px solid lightgrey",
  borderRadius: "5px",
  marginTop: "1rem",
  padding: "1rem",
  boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.2)",
});

export const AccountSetting_FirstSectionSubDiv = styled("div")({
  width: "96%",
  height: "fit-content",
  marginTop: "1rem",
  padding: ".4rem",
});

export const AccountSetting_IndividualItemContainer = styled("div")({
  width: "836px",
  height: "70px",
  marginBottom: "30px",
  "@media (max-width : 56.7em)": {
    width: "100%",
  },
});

export const AccountSetting_IndividualBigItemContainer = styled("div")({
  width: "836px",
  height: "70px",
  marginBottom: "55px",
  "@media (max-width : 56.7em)": {
    width: "100%",
  },
});

export const AccountSetting_IndividualItemSmallInput = styled("input")({
  width: "870px",
  height: "44px",
  padding: "10px 14px 10px 14px",
  borderRadius: "8px",
  border: "1px solid lightgrey",
  outline: "none",
  "@media (max-width : 56.7em)": {
    width: "100%",
  },
});
export const AccountSetting_IndividualItemLabel = styled("p")({
  width: "fit-content",
  height: "20px",
  textTransform: "capitalize",
  fontSize: "14px",
});

export const AccountSetting_IndividualItemBigInput = styled("textarea")({
  width: "860px",
  height: "85px",
  outline: "none",
  border: "1px solid lightgrey",
  "@media (max-width : 56.7em)": {
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
    width: "200px",
  },
  "@media (max-width : 37.5em)": {
    width: "150px",
    fontSize: "13px",
  },
  "@media (max-width : 28.2em)": {
    width: "110px",
    fontSize: "9.5px",
  },
});

export const AccountSetting_IndividualItemButtonDiv = styled("div")({
  width: "860px",
  height: "44px",
  display: "flex",
  alignItems: "center",
  marginTop: "80px",
  justifyContent: "space-between",
  "@media (max-width : 56.7em)": {
    width: "100%",
  },
});

export const AccountSetting_SecondSection = styled("div")({
  width: "100%",
  height: "fit-content",
  border: "1px solid lightgrey",
  borderRadius: "5px",
  marginTop: "4rem",
  padding: "1rem",
  boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.2)",
});

export const AccountSetting_FirstSectionHeader = styled("h3")({
  fontSize: "2rem",
  textTransform: "capitalize",
});

export const AccountSetting_FirstSectionIconHeader = styled("h3")({
  fontSize: "4rem",
  textTransform: "capitalize",
});

export const AccountSetting_FirstSectionNameIconHolder = styled("div")({
  width: "100%",
  height: "28%",
  marginTop: "1rem",
  border: "2px solid lightgrey",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const AccountSetting_FirstSectionNameIconBox = styled("div")({
  width: "7rem",
  height: "7rem",
  backgroundColor: "white",
  border: "3px solid grey",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const AccountSetting_Header = styled("div")({
  width: "771px",
  fontSize: "16px",
  height: "40px",
  marginTop: "24px",
  padding: "10px",
});

export const AccountSetting_HeaderDiv = styled("div")({
  width: "100px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "40px",
});

export const AccountSetting_DeleteDiv = styled("div")({
  width: "765px",
  height: "144px",
});

export const AccountSetting_DeleteDivHeader = styled("h3")({
  fontSize: "18px",
  textTransform: "capitalize",
  marginBottom: "40px",
});

export const AccountSetting_HeaderParagraph = styled("p")({
  fontSize: "14px",
  cursor: "pointer",
});

export const AccountSetting_DeleteDivSubPara = styled("p")({
  fontSize: "14px",
  padding: "6px",
  height: "35px",
  display: "flex",
  alignItems: "center",
  textTransform: "capitalize",
  justifyContent: "center",
  width: "148px",
  borderRadius: "8px",
  backgroundColor: "#EEF4FF",
  color: "#3538CD",
  boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
});

export const AccountSetting_ProfieAndSecurityDiv = styled("div")({
  width: "145px",

  height: "24px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});

export const AccountSetting_Text = styled("p")({
  fontSize: "16px",
  width: "fit-content",
  cursor: "pointer",
});

export const AccountSetting_PreviewButton = styled("button")({
  fontSize: "1rem",
  border: "none",
  width: "7.5rem",
  padding: ".4rem",
  color: "blue",
  fontWeight: "bold",
  height: "1.6rem",
  outline: "none",
  backgroundColor: "lightblue",
  borderRadius: "5px",
  cursor: "pointer",
});

export const AccountSetting_SectionContainerInput = styled(TextField)({
  width: "100%",
  marginBottom: "2rem",
  backgroundColor: "white",
  //  border :"1px solid grey"
});

export const AccountSetting_SectionContainerInputFullName = styled(TextField)({
  width: "100%",
  marginBottom: "2rem",
  gridColumn: "1/3",
  backgroundColor: "white",
  //  border :"1px solid grey"
});

export const AccountSetting_SectionContainerButton = styled(Button)({
  width: "70%",
  height: "3rem",
  color: "white",
  backgroundColor: "blue",
});

export const Categories_Select = styled("select")({
  fontSize: "1rem",
  textTransform: "capitalize",
  width: "890px",
  outline: "none",
  height: "3.2rem",
  borderRadius: "4px",
  color: "black",
  backgroundColor: "white",

  border: "2px solid lightgrey",
  cursor: "pointer",
});

export const Option_Key = styled("option")({
  borderBottom: "none",
  height: "2rem",
  fontSize: "1rem",
});

export const AccountSetting_SecondSection_Div = styled("div")({
  width: "100%",
  height: "fit-content",

  marginTop: "7px",
});

export const AccountSetting_SecondSection_Label = styled("p")({
  textAlign: "start",
  fontSize: "1.45rem",
  marginBottom: ".5rem",
  textTransform: "capitalize",
});

export const AccountSetting_SecondSectionInput = styled(TextField)({
  width: "100%",
  marginBottom: ".5rem",
  backgroundColor: "white",
});

export const AccountSetting_SecondSectionButtonDiv = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "end",
  //  alignItems : "center",
  marginTop: "2rem",
});
export const AccountSetting_SecondSectionButton = styled(Button)({
  width: "7rem",
  marginTop: "2rem",

  //  border :"1px solid grey"
});
