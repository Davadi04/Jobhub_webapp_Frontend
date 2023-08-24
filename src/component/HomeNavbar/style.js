import { styled, TextField, Button } from "@mui/material";

export const HomeNavbar = styled("div")({
  width: "100vw",
  height: "80px",
  //  backgroundColor : "green",
  //  position : "fixed",
  color: "grey",
  borderBottom: "2px solid lightgrey",
});

export const HomeNavbar_HeadContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  backgroundColor: "white",
  padding: "0rem 2rem 0rem 2rem",
  "@media (max-width : 56.7em)": {
    justifyContent: "space-between",
    padding: "0rem 15px 0rem 5px",
  },
  "@media (max-width : 38.75em)": {
    padding: "0rem 20px 0rem 5px",
  },
});

export const HomeNavbar_HeadSubContainer = styled("div")({
  width: "100%",
  height: "55%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  backgroundColor: "whitesmoke",
  //  padding : "0rem 6rem 0rem 6rem",
});

export const HomeNavbar_HeaderImagecontainer = styled("div")({
  width: "21px",
  height: "21px",
  "@media (max-width : 43.75em)": {
    width: "19px",
    height: "19px",
  },
});

export const HomeNavbar_HeaderImage = styled("img")({
  width: "100%",
  height: "100%",
});

export const HomeNavbar_HeaderIconDiv = styled("div")({
  width: "101px",
  height: "21px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media (max-width : 43.75em)": {
    width: "75px",
  },
});

export const HomeNavbar_HeadText = styled("h3")({
  fontSize: "20px",
  color: "#444CE7",
  cursor: "pointer",
  "@media (max-width : 43.75em)": {
    fontSize: "16px",
  },
});

export const HomeNavbar_HeadPara = styled("h3")({
  fontSize: "14px",
  cursor: "pointer",
  "@media (max-width : 56.7em)": {
    display: "none",
  },
});

export const HomeNavbar_HeadSubPara = styled("h3")({
  fontSize: "14px",
  cursor: "pointer",
  "@media (max-width : 37.5em)": {
    display: "none",
  },
});

export const HomeNavbar_InputAndButton = styled("div")({
  width: "394px",
  height: "44px",
  "@media (max-width : 56.7em)": {
    width: "240px",
  },
  "@media (max-width : 43.75em)": {
    width: "200px",
  },
  "@media (max-width : 37.5em)": {
    width: "200px",
    height: "34px",
  },
});

export const HomeNavbar_ProfileImgDiv = styled("div")({
  width: "43px",
  borderRadius: "50%",
  backgroundColor: "white",
  height: "43px",
  padding: "5px",
  display: "flex",
  fontSize: "25px",
  alignItems: "center",
  justifyContent: "center",
  border: "3px solid grey",
  "@media (max-width : 56.7em)": {
    display: "none",
  },
});

export const HomeNavBar_Lock = styled("div")({
  display: "none",
  "@media (max-width : 56.7em)": {
    display: "block",
  },
});
export const HomeNavbar_AccountProfileDiv = styled("div")({
  width: "100%",
  height: "fit-content",
  overflow: "hidden",
  backgroundColor: "white",
  borderRadius: "5px",
  border: "1.5px solid lightgrey",
  position: "absolute",
  zIndex: "1000",
  top: "3.2rem",
  left: "0%",
  boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.2)",

  "@media (max-width : 57.5em)": {
    left: "-16%",
    top: "1.3rem",
  },

  "@media (max-width : 43.75em)": {
    left: "-40%",
    top: "1.3rem",
    width: "153px",
  },

  "@media (max-width : 38.75em)": {
    left: "-0.9rem",
    top: "1.3rem",
    width: "123px",
  },
  "@media (max-width : 35.4em)": {
    left: "-6.8rem",
    top: "1.3rem",
    width: "123px",
  },
});

export const HomeNavbar_AllProfileItems = styled("div")({
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "fit-content",
  flexDirection: "column",
  //  marginTop : "0rem",
  position: "relative",
});

export const HomeNavbar_ProfileContainerHolder = styled("div")({
  width: "181px",
  display: "flex",
  alignItems: "center",
  color: "black",
  justifyContent: "space-evenly",
  "@media (max-width : 43.75em)": {
    width: "120px",
  },
  "@media (max-width : 37.5em)": {
    width: "20px",
  },
});

export const HomeNavbar_ProfileInnerItemPara = styled("p")({
  fontSize: "14px",
  width: "70%",
  "@media (max-width : 38.75em)": {
    fontSize: "13px",
  },
  "@media (max-width : 35.4em)": {
    fontSize: "12px",
  },
});

export const HomeNavbar_ProfileInnerItem = styled("div")({
  height: "46px",
  width: "240px",
  cursor: "pointer",
  color: "black",
  fontSize: "20px",
  borderBottom: "1px solid black",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  "@media (max-width : 43.75em)": {
    width: "100%",
  },
  "@media (max-width : 38.75em)": {
    fontSize: "16.5px",
  },
  "@media (max-width : 35.4em)": {
    fontSize: "14.5px",
  },
});

export const HomeNavbar_Input = styled("input")({
  width: "394px",
  height: "44px",
  borderRadius: "8px",
  border: "1px solid grey",
  padding: "8px",
  outline: "none",
  "@media (max-width : 56.7em)": {
    width: "240px",
  },

  "@media (max-width : 43.75em)": {
    width: "200px",
  },
  "@media (max-width : 37.5em)": {
    width: "200px",
    height: "34px",
  },
});

export const HomeNavbar_Button = styled("button")({
  width: "5rem",
  height: "2.7rem",
  border: "none",
  borderRadius: "0px 5px 5px  0px",
  backgroundColor: "blue",
  color: "white",
  cursor: "pointer",
});

export const Categories_Select = styled("select")({
  fontSize: "1rem",
  textTransform: "capitalize",
  width: "13rem",
  outline: "none",
  height: "2.5rem",
  borderRadius: "2px",
  color: "black",
  borderRadius: "2px",
  border: "2px solid lightgrey",
  cursor: "pointer",
});

export const Option_Key = styled("option")({
  borderBottom: "none",
  height: "2rem",
  fontSize: "1rem",
});

export const HomeNavbar_LoginAndSignUpButtonDiv = styled("div")({
  width: "295px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media (max-width : 56.7em)": {
    width: "205px",
    marginRight: "10px",
  },
  "@media (max-width : 31.25em)": {
    width: "170px",
  },
});

export const HomeNavbar_LoginAndSignUpButton = styled(Button)({
  width: "140px",
  height: "40px",
  fontSize: "14px",
  textTransform: "capitalize",
  borderRadius: "8px",
  "@media (max-width : 56.7em)": {
    width: "100px",
    fontSize: "13px",
  },
  "@media (max-width : 31.25em)": {
    width: "80px",
    fontSize: "11px",
    height: "30px",
  },
});
