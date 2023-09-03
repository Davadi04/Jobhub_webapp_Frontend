import { Button, styled } from "@mui/material";

export const Employer = styled("div")({
  width: "100vw",
  height: "fit-content",
  backgroundColor: "whitesmoke",
});

export const Employer_PostIconContainer = styled("div")({
  width: "100vw",
  height: "596px",
  padding: "40px 100px 40px 50px",
});

export const Employer_PostIconInnerContainer = styled("div")({
  width: "1240px",
  height: "516px",
});

export const Employer_PostIconInnerContainerBody = styled("div")({
  width: "1240px",
  height: "424px",
  flexDirection: "column",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Employer_PostIconInnerContainerHeader = styled("div")({
  width: "1200px",
  height: "76px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "6px",
  "@media (max-width : 75em)": {
    width: "900px",
  },
  "@media (max-width : 57.5em)": {
    width: "85%",
  },
});

export const Employer_PostIconInnerContainerHeaderButton = styled(Button)({
  width: "150px",
  height: "40px",
  borderRadius: "8px",
  "@media (max-width : 75em)": {
    width: "125px",
    height: "35px",
  },
  "@media (max-width : 57.5em)": {
    width: "115px",
    height: "35px",
    fontSize: "12px",
  },
  "@media (max-width : 37.5em)": {
    width: "105px",
    height: "35px",
    fontSize: "11px",
  },
  "@media (max-width : 28.2em)": {
    width: "90px",
    height: "30px",
    fontSize: "10px",
  },
});

export const Employer_PostIconInnerContainerBodyButton = styled(Button)({
  width: "352px",
  height: "40px",
  borderRadius: "8px",
});

export const Employer_PostIconInnerContainerBodyImgContainer = styled("div")({
  width: "45px",
  height: "45px",
  color: "#444ce7",
  display: "flex",
  fontSize: "30px",
  alignItems: "center",
  borderRadius: "24px",
  justifyContent: "center",
  backgroundColor: "lightblue",
  marginBottom: "12px",
});

export const Employer_PostIconInnerContainerBodyImg = styled("img")({
  width: "100%",
  height: "100%",
});
export const Employer_PostIconInnerContainerBodySmallText = styled("p")({
  width: "352px",
  height: "24px",
  fontSize: "14px",
});

export const Employer_PostIconInnerContainerBodyBigText = styled("h3")({
  width: "352px",
  height: "24px",
  fontSize: "20px",
  marginBottom: "5px",
});

////////////////////////////////////////////////////////////
///////////// Employer PostForm

export const Employer_PostForm = styled("div")({
  width: "100vw",
  height: "1724px",
  padding: "40px 100px 40px 150px",
  "@media (max-width : 57.5em)": {
    padding: "10px 30px 10px 30px",
  },
});

export const Employer_PostFormConatiner = styled("div")({
  width: "1004px",
  height: "1644px",
  borderRadius: "8px",
  padding: "32px",
  backgroundColor: "white",
  "@media (max-width : 75em)": {
    width: "900px",
  },
  "@media (max-width : 57.5em)": {
    width: "100%",
    padding: "10px",
  },
});

export const Employer_PostFormConatinerHeader = styled("div")({
  width: "940px",
  height: "72px",
  backgroundColor: "#FCFCFD",
  padding: "16px  0px  16px  0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginBottom: "15px",
  "@media (max-width : 75em)": {
    width: "100%",
  },
});

export const Employer_PostFormConatinerBody = styled("div")({
  width: "940px",
  height: "1492px",
  backgroundColor: "#FCFCFD",
  padding: "32px",
  borderRadius: "8px",
  marginBottom: "15px",
  "@media (max-width : 75em)": {
    width: "100%",
  },
});

export const Employer_PostFormConatinerBodyBigText = styled("h3")({
  width: "876px",
  height: "28px",
  fontSize: "18px",
  marginBottom: "15px",
  "@media (max-width : 75em)": {
    width: "100%",
    fontSize: "16px",
  },
});

export const Employer_PostFormConatinerBodyInputBox = styled("div")({
  width: "876px",
  height: "66px",
  marginBottom: "15px",
  "@media (max-width : 75em)": {
    width: "100%",
    height: "60px",
    marginBottom: "10px",
  },
});

export const Employer_PostFormConatinerBodyTextAreaBox = styled("div")({
  width: "876px",
  height: "156px",
  marginBottom: "20px",
  "@media (max-width : 75em)": {
    width: "100%",
    height: "135px",
    marginBottom: "15px",
  },
  "@media (max-width : 37.5em)": {
    marginBottom: "30px",
  },
});

export const Employer_PostFormConatinerBodyButtonDiv = styled("div")({
  width: "876px",
  height: "40px",
  marginBottom: "10px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  "@media (max-width : 75em)": {
    width: "100%",
  },
});

export const Employer_PostFormConatinerBodyInnerButtonDiv = styled("div")({
  width: "37.5%",
  height: "100%",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "@media (max-width : 57.5em)": {
    width: "45%",
  },
  "@media (max-width : 37.5em)": {
    width: "80%",
  },
});

export const Employer_PostFormConatinerBodyDivideBox = styled("div")({
  width: "876px",
  height: "66px",
  marginBottom: "15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width : 75em)": {
    width: "100%",
  },
  "@media (max-width : 57.5em)": {
    display: "block",
    height: "fit-content",
    marginBottom: "2px",
  },
});

export const Employer_PostFormConatinerBodyDivideInput = styled("input")({
  width: "428px",
  height: "40px",
  borderRadius: "8px",
  outline: "none",
  border: "1px solid lightgrey",
  padding: "5px",
  "@media (max-width : 75em)": {
    width: "100%",
    marginBottom: "15px",
  },
});

export const Employer_PostFormConatinerBodyTextArea = styled("textarea")({
  width: "876px",
  height: "128px",
  borderRadius: "8px",
  outline: "none",
  border: "1px solid lightgrey",
  padding: "5px",
  "@media (max-width : 75em)": {
    width: "100%",
  },
});

export const Employer_PostFormConatinerBodyInputText = styled("p")({
  width: "fit-content",
  height: "20px",
  fontSize: "17px",
  "@media (max-width : 57.5em)": {
    fontSize: "14px",
  },
});

export const Employer_PostFormConatinerBodyInput = styled("input")({
  width: "876px",
  height: "40px",
  borderRadius: "8px",
  border: "1px solid lightgrey",
  "@media (max-width : 75em)": {
    width: "100%",
  },
});

export const Employer_PostFormConatinerSelect = styled("select")({
  fontSize: "14px",
  textTransform: "capitalize",
  outline: "none",
  width: "428px",
  height: "40px",
  borderRadius: "8px",
  "@media (max-width : 57.5em)": {
    width: "100%",
    marginBottom: "15px",
  },

  "@media (max-width : 37.5em)": {
    fontSize: "11px",
  },
});

export const Employer_PostFormConatinerOption = styled("option")({
  borderBottom: "none",
  height: "2rem",
  fontSize: "1rem",
  "@media (max-width : 57.5em)": {
    fontSize: "14px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "11px",
  },
});

/////////////////////////////////////////
////////////// Employer_PopUpPost

export const Employer_PopUpPost = styled("div")({
  width: "100vw",
  height: "100vh",
  backgroundColor: "whitesmoke",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Employer_PopUpPostContainer = styled("div")({
  width: "408px",
  height: "280px",
  border: "1px solid lightgrey",
  borderRadius: "12px",
  padding: "54px 34px 34px 34px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  // justifyContent: "center",
  flexDirection: "column",
  boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.2)",
  "@media (max-width : 57.5em)": {
    width: "250px",
  },
});

export const Employer_PopUpPostImgContainer = styled("div")({
  width: "48px",
  height: "48px",
  marginBottom: "20px",
  borderRadius: "28px",
  backgroundColor: "#D1FADF",
  "@media (max-width : 57.5em)": {
    width: "40px",
    height: "40px",
  },
});

export const Employer_PopUpPostImg = styled("img")({
  width: "100%",
  height: "100%",
});

export const Employer_PopUpPostHeadText = styled("h3")({
  fontSize: "18px",
  marginBottom: "15px",

  "@media (max-width : 57.5em)": {
    fontSize: "15px",
    marginBottom: "10px",
  },
});

export const Employer_PopUpPostSubText = styled("p")({
  fontSize: "14px",
  marginBottom: "15px",
  "@media (max-width : 57.5em)": {
    fontSize: "12px",
    marginBottom: "10px",
  },
});

export const Employer_PopUpPostButton = styled(Button)({
  fontSize: "14px",
  width: "360px",
  height: "44px",

  "@media (max-width : 57.5em)": {
    width: "200px",
    height: "34px",
  },
});

export const Employer_PopUpPostTwoButton = styled(Button)({
  fontSize: "14px",
  width: "130px",
  height: "44px",

  "@media (max-width : 57.5em)": {
    width: "100px",
    height: "34px",
    fontSize: "12px",
  },
});

export const Employer_PopUpPostButtonDiv = styled("div")({
  width: "300px",
  height: "44px",
  display: "flex",
  justifyContent: "space-between",

  "@media (max-width : 57.5em)": {
    width: "230px",
  },
});

/////////////////////////////////////////////////
////////// Employer_ListOfJobs

export const Employer_ListOfJobs = styled("div")({
  width: "100vw",
  height: "fit-content",
  backgroundColor: "whitesmoke",
  padding: "40px 100px 40px 50px",
  "@media (max-width : 75em)": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    flexDirection: "column",
  },
});

export const Employer_ListOfJobsContainer = styled("div")({
  width: "1200px",
  height: "fit-content",
  borderRadius: "8px",
  padding: "24px",
  backgroundColor: "white",

  "@media (max-width : 75em)": {
    width: "900px",
  },
  "@media (max-width : 57.5em)": {
    width: "85%",
  },
});

export const Employer_ListOfJobsInnerBox = styled("div")({
  width: "1150px",
  height: "310px",
  border: "1px solid lightgrey",
  padding: "24px",
  borderRadius: "8px",
  marginBottom: "15px",
  "@media (max-width : 75em)": {
    width: "100%",
  },
});

export const Employer_ListOfJobsInnerBoxSide = styled("div")({
  width: "1150px",
  height: "260px",
  border: "1px solid lightgrey",
  padding: "24px",
  borderRadius: "8px",
  marginBottom: "15px",
  "@media (max-width : 75em)": {
    width: "100%",
  },
});

export const Employer_ListOfJobsInnerBoxRoleAndEdit = styled("div")({
  width: "1100px",
  height: "56px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
  position: "relative",
  "@media (max-width : 75em)": {
    width: "100%",
  },
});

export const Employer_ListOfJobsInnerBoxAndEdit = styled("div")({
  width: "48px",
  height: "40px",
  border: "1px solid lightgrey",
  fontSize: "28px",
  backgroundColor: "whitesmoke",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width : 57.5em)": {
    width: "40px",
    height: "32px",
    fontSize: "20px",
  },
  "@media (max-width : 37.5em)": {
    width: "35px",
    height: "27px",
    fontSize: "17px",
  },
});

export const Employer_ListOfJobsInnerBoxRole = styled("div")({
  width: "238px",
  height: "56px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width : 57.5em)": {
    width: "130px",
  },
  "@media (max-width : 37.5em)": {
    width: "110px",
  },
});

export const Employer_ListOfJobsInnerBoxDescription = styled("div")({
  width: "1150px",
  height: "55px",
  marginBottom: "10px",
  overflow: "hidden",
  "@media (max-width : 75em)": {
    width: "100%",
    fontSize: "13px",
  },
});

export const Employer_ListOfJobsTypeAndPayDescription = styled("div")({
  width: "1150px",
  height: "24px",
  "@media (max-width : 75em)": {
    width: "100%",
  },
});

export const Employer_ListOfJobsTypeAndPayDescriptionInnerDiv = styled("div")({
  width: "fit-content",
  height: "24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
});

export const Employer_ListOfJobsTypeAndPayDescriptionInnerIndividualDiv =
  styled("div")({
    width: "82px",
    height: "24px",
    display: "flex",
    justifyContent: "space-between",
    marginRight: "15px",
    alignItems: "center",
    fontSize: "18px",
    "@media (max-width : 57.5em)": {
      width: "70px",
      fontSize: "14px",
    },
    "@media (max-width : 37.5em)": {
      width: "65px",
      fontSize: "14px",
    },
  });

export const Employer_ListOfJobsInnerAvailuableIndividualDiv = styled("div")({
  width: "350px",
  height: "24px",
  marginRight: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "@media (max-width : 57.5em)": {
    width: "100%",
  },
});
export const Employer_ListOfJobsInnerAvailuableIndividualText = styled("p")({
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
  "@media (max-width : 57.5em)": {
    fontSize: "12px",
  },
  "@media (max-width : 28.2em)": {
    fontSize: "11px",
  },
});
export const Employer_ListOfJobsInnerBoxRoleDiv = styled("div")({
  width: "170px",
  height: "56px",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  overflow: "hidden",
  "@media (max-width : 57.5em)": {
    width: "fit-content",
  },
});
export const Employer_ListOfJobsInnerBoxImgContainer = styled("div")({
  width: "56px",
  height: "56px",
  "@media (max-width : 57.5em)": {
    width: "45px",
    height: "45px",
  },
  "@media (max-width : 37.5em)": {
    width: "42px",
    height: "42px",
  },
});

export const Employer_ListOfJobsInnerBoxImg = styled("img")({
  width: "100%",
  height: "100%",
});

export const Employer_ListOfJobsInnerHeadText = styled("h3")({
  fontSize: "18px",
  marginBottom: "5px",
  textTransform: "capitalize",
  "@media (max-width : 57.5em)": {
    fontSize: "16px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "14px",
  },
  "@media (max-width : 28.2em)": {
    fontSize: "13.5px",
  },
});

export const Employer_ListOfJobsInnerMiddleText = styled("p")({
  fontSize: "16px",
  textTransform: "capitalize",
  "@media (max-width : 57.5em)": {
    fontSize: "13px",
  },
});

export const Employer_ListOfJobsInnerSubText = styled("p")({
  fontSize: "14px",
  //  marginBottom: "0px",
  textTransform: "capitalize",
  "@media (max-width : 57.5em)": {
    fontSize: "12.5px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "10.5px",
  },
});

export const Employer_ListOfJobsInnerPostButton = styled(Button)({
  fontSize: "14px",
  width: "126px",
  height: "35px",
  "@media (max-width : 57.5em)": {
    fontSize: "12px",
    width: "106px",
    height: "35px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "11px",
    width: "90px",
    height: "30px",
  },
});

export const Employer_DeleteDiv = styled("div")({
  width: "200px",
  height: "35px",
  borderRadius: "3px",
  border: "1px solid lightgrey",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  padding: "3px 3px 3px 10px",
  position: "absolute",
  right: "0%",
  top: "90%",
  cursor: "pointer",
  "@media (max-width : 57.5em)": {
    width: "150px",
  },
  "@media (max-width : 37.5em)": {
    width: "100px",
    top: "80%",
  },
});
export const Employer_DeleteDivBigText = styled("h3")({
  fontSize: "18px",
  "@media (max-width : 57.5em)": {
    fontSize: "16px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "14px",
  },
  "@media (max-width : 28.2em)": {
    fontSize: "13.5px",
  },
});
