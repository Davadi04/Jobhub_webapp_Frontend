import { styled, TextField, Button } from "@mui/material";
import image from "../../../image/compImg.png";

export const JobSeeker = styled("div")({
  width: "100vw",
  height: "829px",
  backgroundColor: "whitesmoke",
  display: "flex",
  overflow: "hidden",
  "@media (max-width : 57em)": {
    height: "900px",
  },
});

export const JobSeeker_ProfileSteps = styled("div")({
  width: "616px",
  height: "829px",
  backgroundColor: "#EEF4FF",
  padding: "5rem 0rem 0rem 0rem",
  overflow: "hidden",

  "@media (max-width : 56.25em)": {
    display: "none",
  },
});

export const JobSeeker_ProfileStepsCont = styled("div")({
  padding: "0rem 2rem 2rem 2rem",
});

export const JobSeeker_ProfileStepsImageContainer = styled("div")({
  width: "100%",
  height: "460.03px",
  backgroundColor: "#EEF4FF",
  backgroundImage: `url(${image})`,
  backgroundPosition: "100%",
});

export const JobSeeker_ProfileDetails = styled("div")({
  width: "792px",
  height: "831px",
  backgroundColor: "white",
  padding: "90px 0px 90px 0px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",

  "@media (max-width : 56.25em)": {
    width: "100%",

    height: "100%",
  },
});

export const JobSeeker_ProfileDetailsDiv = styled("div")({
  width: "430px",
  height: "517px",
  "@media (max-width : 37.5em)": {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    display: "flex",
    height: "100%",
  },
});

export const JobSeeker_ProfileDetailsSecondPageDiv = styled("div")({
  width: "430px",
  height: "709px",
  "@media (max-width : 37.5em)": {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    display: "flex",
    height: "900px",
  },
});

export const JobSeeker_ProfileDetailsUploadDiv = styled("div")({
  width: "430px",
  height: "152px",
  // marginBottom : "20px",
  "@media (max-width : 37.5em)": {
    width: "335px",
    height: "fit-content",
  },
});

export const JobSeeker_ProfileDetailsUploadinnerDiv = styled("div")({
  width: "430px",
  height: "126px",
  marginBottom: "10px",
});

export const JobSeeker_ProfileDetailsUploadinnerLabel = styled("label")({
  width: "430px",
  height: "126px",
});

export const JobSeeker_Header_ImageContainer = styled("div")({
  width: "40px",
  height: "40px",
  marginBottom: "7px",
});

export const JobSeeker_Header_Image = styled("img")({
  width: "100%",
  height: "100%",
});

export const JobSeeker_UploadCvText = styled("p")({
  fontSize: "14px",
  textTransform: "capitalize",
  width: "382px",
  marginBottom: "7px",
});

export const JobSeeker_UploadCvSubText = styled("p")({
  fontSize: "12px",
  textTransform: "capitalize",
  width: "382px",
});

export const JobSeeker_ProfileDetailsUploadinnerLabelDiv = styled("div")({
  width: "90%",
  height: "126px",
  border: "1px solid lightgrey",
  padding: "16px 24px 16px 24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});

export const JobSeeker_ProfileDetailsInnerContainer = styled("div")({
  width: "430px",
  height: "70px",

  marginBottom: "10px",
  "@media (max-width : 37.5em)": {
    width: "335px",
    height: "fit-content",
  },
});

export const JobSeeker_ProfileDetailsGenderContainer = styled("div")({
  width: "207px",
  height: "70px",

  marginBottom: "10px",
});

export const JobSeeker_ProfileDetailsInnerBioContainer = styled("div")({
  width: "430px",
  height: "107px",
  marginBottom: "10px",
  "@media (max-width : 37.5em)": {
    width: "335px",
    height: "fit-content",
  },
});

export const JobSeeker_ProfileDetailsGenderMainContainer = styled("div")({
  width: "430px",
  height: "70px",
  marginBottom: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "@media (max-width : 37.5em)": {
    width: "335px",
    display: "block",
    //   marginLeft: "95px",
    height: "fit-content",
  },
});

export const Categories_Select = styled("select")({
  width: "60%",
  fontSize: "1rem",
  textTransform: "capitalize",
  // border : "",
  outline: "none",
  height: "3.5rem",
  padding: "0rem 0rem 0rem .4rem",
  borderRadius: "2px",
  color: "black",
  borderRadius: "5px",
  border: "1px solid lightgrey",
  marginBottom: "2rem",
});

export const Profile_Select = styled("select")({
  width: "207px",
  fontSize: "14px",
  textTransform: "capitalize",
  // border : "",
  outline: "none",
  height: "55px",
  padding: "0rem 0rem 0rem .4rem",
  borderRadius: "2px",
  color: "black",
  borderRadius: "5px",
  border: "1px solid lightgrey",
  marginBottom: "2rem",
  "@media (max-width : 37.5em)": {
    width: "335px",
  },
});

export const Cv_Span = styled("span")({
  width: "100px",
  textAlign: "start",
  fontSize: "14px",
  "@media (max-width : 37.5em)": {
    width: "fit-content",
  },
});

export const Option_Key = styled("option")({
  borderBottom: "none",
  height: "2rem",
  fontSize: "14px",
});

export const JobSeeker_ProfileStepsHeader = styled("h3")({
  fontSize: "20px",
  textTransform: "capitalize",
  marginBottom: "20px",
});

export const JobSeeker_ProfileStepsPara = styled("p")({
  fontSize: "2rem",
  fontWeight: "bold",
});

export const JobSeeker_ProfileStepsSecondPara = styled("p")({
  fontSize: "20px",
  fontWeight: "bold",
});

export const JobSeeker_ProfileStepsDiv = styled("div")({
  width: "100%",
  height: "4.5rem",
  fontSize: "2rem",
  textTransform: "capitalize",
  marginBottom: "2rem",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});

export const JobSeeker_ProfileStepsNumberHolder = styled("div")({
  width: "50px",
  height: "50px",
  fontSize: "18px",
  display: "flex",
  color: "white",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#444CE7",
  borderRadius: "50%",
});

export const JobSeeker_ProfileStepsNumberSecondHolder = styled("div")({
  width: "50px",
  height: "50px",
  fontSize: "18px",
  display: "flex",
  color: "grey",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "50%",
});

export const JobSeeker_ProfileStepsIconHolder = styled("div")({
  width: "3.4rem",
  height: "3.7rem",
  fontSize: "1.65rem",
  display: "flex",
  color: "white",
  justifyContent: "center",
  alignItems: "center",
});

export const JobSeeker_ProfileGenderHolder = styled("div")({
  width: "430px",
  height: "47px",
  marginTop: "50px",
  display: "flex",

  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width : 37em)": {
    width: "335px",
  },
});

export const JobSeeker_SectionContainerInput = styled("input")({
  width: "430px",
  height: "44px",
  outline: "none",
  border: "1px solid lightgrey",

  "@media (max-width : 37.5em)": {
    width: "335px",
  },
});

export const JobSeeker_SectionContainerCompanySizeInput = styled("input")({
  width: "210px",
  height: "55px",
  outline: "none",
  border: "1px solid lightgrey",
  "@media (max-width : 37.5em)": {
    width: "335px",
  },
});

export const JobSeeker_SectionContainerGenderInput = styled("input")({
  width: "430px",
  height: "44px",
  outline: "none",
  border: "1px solid lightgrey",
});

export const JobSeeker_SectionContainerBioInput = styled("textarea")({
  width: "430px",
  height: "85px",
  outline: "none",
  border: "1px solid lightgrey",
  "@media (max-width : 37.5em)": {
    width: "335px",
  },
});
export const JobSeeker_SectionContainerUploadCvInput = styled("input")({
  width: "430px",
  height: "45px",
  padding: "7px 0px 7px 4px",
  border: "1px solid lightgrey",
  "@media (max-width : 37.5em)": {
    width: "335px",
  },
  // display: "none",
});

export const JobSeeker_SectionContainerButton = styled(Button)({
  width: "430px",
  height: "44px",
  fontSize: "16px",
  borderRadius: "8px",
  "@media (max-width : 37.5em)": {
    width: "335px",
    height: "38px",
  },
});
export const JobSeeker_SectionContainerButtonBack = styled(Button)({
  width: "160px",
  height: "44px",
  fontSize: "16px",
  borderRadius: "8px",
  "@media (max-width : 37.5em)": {
    width: "120px",
    height: "30px",
    fontSize: "13px",
  },
});
export const JobSeeker_SectionContainerButtonChange = styled(Button)({
  width: "160px",
  height: "44px",
  backgroundColor: "#444CE7",
  color: "white",
  borderRadius: "8px",
  fontSize: "16px",
  "@media (max-width : 37.5em)": {
    width: "120px",
    height: "30px",
    fontSize: "13px",
  },
});
