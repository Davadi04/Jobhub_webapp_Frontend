import { Button, styled } from "@mui/material";

export const HomeBody = styled("div")({
  width: "100vw",
  height: "fit-content",
  backgroundColor: "whitesmoke",
  padding: "12px 24px 12px 134px",
  "@media (max-width : 75em)": {
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const HomeBody_Navbar = styled("div")({
  width: "1100px",
  height: "76px",
  marginBottom: "16px",
  backgroundColor: "lightblue",
  borderRadius: "8px",
  color: "black",
  padding: "5px 10px 10px 5px",
  marginBottom: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "@media (max-width : 75em)": {
    width: "900px",
  },
  "@media (max-width : 56.25em)": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    height: "fit-content",
    justifyItems: "center",
    gridRowGap: "20px",
    width: "85%",
  },
});

export const HomeBody_Conatainer = styled("div")({
  width: "1100px",
  height: "fit-content",
  position: "absolute",
  left: "120px",
  color: "black",
  //overflow: "scroll",
  "@media (max-width : 75em)": {
    width: "900px",
  },
  "@media (max-width : 56.25em)": {
    width: "85%",
  },
});

export const HomeBody_NoJobContainer = styled("div")({
  width: "1100px",
  height: "700px",
  backgroundColor: "#FCFCFD",
  padding: "5px 10px 10px 5px",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width : 75em)": {
    width: "900px",
  },
  "@media (max-width : 56.25em)": {
    width: "85%",
  },
});

export const HomeBody_NoJobContainerDiv = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const HomeBody_NoJobContainerDivIconHolder = styled("div")({
  fontSize: "5.5rem",
  color: "grey",
});

export const HomeBody_NoJobContainerDivPara = styled("p")({
  fontSize: "16px",
  color: "grey",
});

export const HomeBody_Select = styled("select")({
  fontSize: "14px",
  textTransform: "capitalize",
  width: "200px",
  outline: "none",
  height: "44px",
  borderRadius: "5px 0px 0px 5px",
  overflow: "hidden",
  "@media (max-width : 75em)": {
    width: "170px",
  },
  "@media (max-width : 56.25em)": {
    borderRadius: "5px",
  },
  "@media (max-width : 37.5em)": {
    width: "130px",
  },
  "@media (max-width : 29.375em)": {
    width: "100px",
    fontSize: "11px",
  },
});

export const HomeBody_Option = styled("option")({
  borderBottom: "none",
  height: "2rem",
  fontSize: "1rem",
});

export const HomeBody_SearchButton = styled(Button)({
  width: "126px",
  height: "44px",
  backgroundColor: "#444CE7",
  color: "white",
  borderRadius: "8px",
  fontSize: "12px",
  "@media (max-width : 37.5em)": {
    width: "110px",
    fontSize: "11px",
  },
  "@media (max-width : 29.375em)": {
    width: "100px",
    fontSize: "10px",
    height: "37px",
  },
});

export const HomeBody_PopUp = styled("div")({
  width: "100vw",
  height: "100vh",
  backgroundColor: "whitesmoke",
  display: "flex",
  alignItems: "center",
  position: "fixed",
  top: "0%",
  justifyContent: "center",
});

export const HomeBody_ListOfJobs = styled("div")({
  width: "100vw",
  height: "fit-content",
  backgroundColor: "whitesmoke",
  padding: "40px 100px 40px 50px",
});

export const HomeBody_ListOfJobsContainer = styled("div")({
  width: "1100px",
  height: "fit-content",
  borderRadius: "8px",
  padding: "24px",
  backgroundColor: "white",
  paddingBottom: "20px",
  "@media (max-width : 75em)": {
    width: "900px",
  },
  "@media (max-width : 56.25em)": {
    width: "85%",
  },
  "@media (max-width : 37.5em)": {
    marginTop: "20px",
  },
});

export const HomeBody_ListOfJobsInnerBox = styled("div")({
  width: "1050px",
  height: "310px",
  border: "1px solid lightgrey",
  padding: "24px",
  borderRadius: "8px",
  marginBottom: "15px",
  "@media (max-width : 75em)": {
    width: "850px",
  },
  "@media (max-width : 56.25em)": {
    width: "100%",
    marginBottom: "25px",
  },
});

export const HomeBody_ListOfJobsInnerBoxRoleAndEdit = styled("div")({
  width: "1000px",
  height: "56px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
  "@media (max-width : 75em)": {
    width: "800px",
  },

  "@media (max-width : 56.25em)": {
    width: "100%",
  },
});

export const HomeBody_ListOfJobsInnerBoxAndEdit = styled("div")({
  width: "80px",
  height: "40px",
  fontSize: "20px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "@media (max-width : 56.25em)": {
    width: "62px",
    fontSize: "15px",
  },
  "@media (max-width : 57.5em)": {
    width: "80px",
    justifyContent: "end",
  },
});

export const HomeBody_ListOfJobsInnerBoxRole = styled("div")({
  width: "238px",
  height: "56px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width : 56.25em)": {
    width: "220px",
  },
});

export const HomeBody_ListOfJobsInnerBoxDescription = styled("div")({
  width: "1000px",
  height: "55px",
  marginBottom: "10px",
  overflow: "hidden",
  "@media (max-width : 75em)": {
    width: "800px",
  },

  "@media (max-width : 56.25em)": {
    width: "100%",
  },
});

export const HomeBody_ListOfJobsTypeAndPayDescription = styled("div")({
  width: "1000px",
  // height: "24px",
  overflow: "hidden",
  "@media (max-width : 75em)": {
    width: "800px",
  },

  "@media (max-width : 56.25em)": {
    width: "100%",
  },
});
export const HomeBody_ListOfJobsTypeAndPayDescriptionInnerDiv = styled("div")({
  width: "fit-content",
  height: "24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
});

export const HomeBody_ListOfJobsTypeAndPayDescriptionInnerIndividualDiv =
  styled("div")({
    width: "82px",
    height: "24px",
    display: "flex",
    justifyContent: "space-between",
    marginRight: "15px",
    alignItems: "center",
    fontSize: "18px",
    "@media (max-width : 29.375em)": {
      width: "68px",
    },
  });

export const HomeBody_ListOfJobsInnerAvailuableIndividualDiv = styled("div")({
  width: "350px",
  height: "24px",
  marginRight: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "@media (max-width : 29.375em)": {
    width: "fit-content",
  },
});
export const HomeBody_ListOfJobsInnerAvailuableIndividualText = styled("p")({
  width: "fit-content",
  backgroundColor: "#F8F9FC",
  borderRadius: "16px",
  height: "24px",
  display: "flex",
  marginRight: "10px",
  padding: "7px",
  textTransform: "capitalize",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "14px",
  "@media (max-width : 29.375em)": {
    fontSize: "11px",
  },
});
export const HomeBody_ListOfJobsInnerBoxRoleDiv = styled("div")({
  width: "170px",
  height: "56px",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  overflow: "hidden",
});
export const HomeBody_ListOfJobsInnerBoxImgContainer = styled("div")({
  width: "56px",
  height: "56px",
  "@media (max-width : 56.25em)": {
    width: "50px",
    height: "50px",
  },
  "@media (max-width : 29.375em)": {
    width: "45px",

    height: "45px",
  },
});

export const HomeBody_ListOfJobsInnerBoxImg = styled("img")({
  width: "100%",
  height: "100%",
});

export const HomeBody_ListOfJobsInnerHeadText = styled("h3")({
  fontSize: "18px",
  marginBottom: "5px",
  textTransform: "capitalize",
  "@media (max-width : 37.5em)": {
    fontSize: "15px",
  },
  "@media (max-width : 29.375em)": {
    fontSize: "14px",
  },
});

export const HomeBody_ListOfJobsInnerMiddleText = styled("p")({
  fontSize: "16px",
  textTransform: "capitalize",
  color: "black",
  "@media (max-width : 37.5em)": {
    fontSize: "13px",
  },
  "@media (max-width : 29.375em)": {
    fontSize: "12px",
    width: "fit-content",
  },
});
export const HomeBody_ListOfJobsInnerMiddleTextSAve = styled("p")({
  fontSize: "16px",
  textTransform: "capitalize",
  color: "black",

  "@media (max-width : 57.5em)": {
    display: "none",
  },
  "@media (max-width : 29.375em)": {
    fontSize: "12px",
    width: "fit-content",
  },
});

export const HomeBody_ListOfJobsInnerSubText = styled("p")({
  fontSize: "14px",
  //  marginBottom: "0px",
  textTransform: "capitalize",
  "@media (max-width : 37.5em)": {
    fontSize: "11px",
  },
  "@media (max-width : 29.375em)": {
    fontSize: "10px",
  },
});

export const HomeBody_ListOfJobsInnerPostButton = styled(Button)({
  fontSize: "14px",
  width: "126px",
  height: "35px",

  "@media (max-width : 56.25em)": {
    width: "106px",
    height: "33px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "12px",
    width: "90px",
    height: "30px",
  },

  "@media (max-width : 29.375em)": {
    width: "80px",
    fontSize: "11px",
  },
});
