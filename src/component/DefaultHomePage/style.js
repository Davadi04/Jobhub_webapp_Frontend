import { styled, TextField, Button } from "@mui/material";

export const FirstSection = styled("div")({
  width: "100vw",
  height: "70vh",
  //   backgroundColor : "red",

  position: "relative",
  zIndex: "10",

  "@media (max-width : 56.3em)": {
    height: "60vh",
  },
});

export const FirstSection_Container = styled("div")({
  width: "100%",
  height: "100%",
  //  backgroundColor : "green",
  // padding: " 0px 32px 0px 32px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
});

export const FirstSection_HeaderButton = styled(Button)({
  width: "106px",
  height: "28px",
  // backgroundColor : "#EEF4FF",
  padding: "4px 10px 4px 4px",
  borderRadius: "16px",
  color: "#444CE7",
  marginBottom: "14px",
  fontSize: "12px",
});

export const FirstSection_SubText = styled("p")({
  width: "764px",
  height: "90px",
  fontSize: "20px",
  textTransform: "capitalize",

  "@media (max-width : 56.3em)": {
    fontSize: "15px",
    width: "60%",
    height: "80px",
    marginBottom: "15px",
  },
  "@media (max-width : 48.75em)": {
    height: "fit-content",
    width: "80%",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "12px",
    width: "90%",
    marginBottom: "15px",
  },
  "@media (max-width : 28em)": {
    fontSize: "11px",
    width: "80%",
    marginBottom: "10px",
  },
});

export const FirstSection_BigText = styled("p")({
  width: "900px",
  height: "120px",
  fontSize: "48px",
  textTransform: "capitalize",
  marginBottom: "14px",
  "@media (max-width : 56.3em)": {
    fontSize: "34px",
    width: "70%",
    height: "80px",
    marginBottom: "15px",
  },
  "@media (max-width : 48.75em)": {
    height: "fit-content",
    width: "80%",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "24px",
    width: "90%",
    marginBottom: "15px",
  },
  "@media (max-width : 28em)": {
    fontSize: "18px",
    width: "75%",
    marginBottom: "15px",
  },
});

export const FirstSection_ButtonContainer = styled("div")({
  width: "300px",
  height: "44px",
  fontSize: "48px",
  textTransform: "capitalize",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const FirstSection_Button = styled(Button)({
  width: "143px",
  height: "44px",
  borderRadius: "8px",
  fontSize: "18px",
  "@media (max-width : 56.3em)": {
    height: "36px",
    width: "133px",
    fontSize: "16px",
  },
  "@media (max-width : 37.5em)": {
    width: "113px",
    fontSize: "14px",
  },
  "@media (max-width : 25em)": {
    width: "103px",
    fontSize: "13px",
  },
});

//////////////////////////////////////////////////////////
// SecondSection

export const SecondSection = styled("div")({
  width: "100vw",
  height: "80vh",
  padding: "96px 0px 96px 0px",

  "@media (max-width : 56.3em)": {
    height: "70vh",
    padding: "40px 0px 40px 0px",
  },
  "@media (max-width : 37.5em)": {
    padding: "0px",
  },
});

export const SecondSection_Container = styled("div")({
  width: "100%",
  height: "70vh",
  // padding: " 0px 32px 0px 32px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  backgroundColor: "#F5F8FF",
});

export const SecondSection_Header = styled("p")({
  width: "100%",
  height: "24px",

  fontSize: "16px",
  marginBottom: "50px",
  "@media (max-width : 37.5em)": {
    marginBottom: "10px",
    height: "12px",
  },
});

export const SecondSection_ImageContainer = styled("div")({
  width: "90%",
  height: "85px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media (max-width : 37.5em)": {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",

    justifyItems: "center",
  },
});

export const SecondSection_ImagesDiv = styled("div")({
  width: "100px",
  height: "85px",
});

export const SecondSection_Images = styled("img")({
  width: "100%",
  height: "100%",
});

//////////////////////////////////////////////////////////
// ThirdSection

export const ThirdSection = styled("div")({
  width: "100vw",
  height: "100vh",
  // marginTop: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "@media (max-width : 56.3em)": {
    height: "140vh",
  },
  "@media (max-width : 37.5em)": {
    height: "120vh",
  },
});

export const ThirdSection_FirstContainer = styled("div")({
  width: "95%",
  height: "130px",
  padding: " 0px 10px 0px 10px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  marginBottom: "32px",
  "@media (max-width : 56.3em)": {
    height: "fit-content",
    marginBottom: "5px",
  },
});

export const ThirdSection_SecondContainer = styled("div")({
  width: "95%",
  height: "178px",
  padding: " 0px 10px 0px 10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  textAlign: "center",
  marginBottom: "32px",
  "@media (max-width : 56.3em)": {
    display: "block",
    height: "fit-content",
    padding: "10px 10px 10px 10px",
    marginBottom: "12px",
  },
});

export const ThirdSection_SecondItemDiv = styled("div")({
  width: "300px",
  height: "178px",
  padding: " 0px 10px 0px 10px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  marginBottom: "20px",
  "@media (max-width : 56.3em)": {
    width: "100%",
    alignItems: "start",
  },
});

export const ThirdSection_SubText = styled("p")({
  width: "764px",
  height: "90px",
  fontSize: "16px",
  textTransform: "capitalize",
  color: "#444CE7",
  "@media (max-width : 56.3em)": {
    fontSize: "14px",
    width: "70%",
    height: "40px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "12px",
  },
});

export const ThirdSection_BigText = styled("p")({
  width: "824px",
  height: "120px",
  fontSize: "36px",
  textTransform: "capitalize",
  marginBottom: "14px",
  "@media (max-width : 56.3em)": {
    fontSize: "25px",
    width: "70%",
    height: "80px",
    marginBottom: "5px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "20px",
  },
  "@media (max-width : 25em)": {
    fontSize: "16.5px",
    width: "90%",
  },
});

export const ThirdSection_ImagesDiv = styled("div")({
  width: "48px",
  height: "48px",
  marginBottom: "10px",
  fontSize: "52px",
  "@media (max-width : 37.5em)": {
    fontSize: "40px",
    marginBottom: "4px",
  },
});

export const ThirdSection_Images = styled("img")({
  width: "100%",
  height: "100%",
});

export const ThirdSection_ItemSubText = styled("p")({
  width: "384px",
  height: "30px",
  fontSize: "20px",
  textTransform: "capitalize",
  marginBottom: "10px",
  color: "#444CE7",
  "@media (max-width : 56.3em)": {
    width: "90%",
    textAlign: "start",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "16px",
  },
  "@media (max-width : 25em)": {
    fontSize: "14.5px",
    marginBottom: "5px",
    height: "20px",
  },
});

export const ThirdSection_ItemBigText = styled("p")({
  width: "300px",
  height: "72px",
  fontSize: "i6px",
  textTransform: "capitalize",
  marginBottom: "14px",
  "@media (max-width : 56.3em)": {
    width: "90%",
    textAlign: "start",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "15px",
  },
  "@media (max-width : 25em)": {
    fontSize: "13.5px",
    marginBottom: "5px",
    height: "50px",
  },
});

//////////////////////////////////////////
/// FouthSection

export const FouthSection = styled("div")({
  width: "100vw",
  height: "60vh",
  backgroundColor: "#F5F8FF",
  padding: "96px 0px 0px 0px",
  color: "black",
  "@media (max-width : 56.3em)": {
    height: "45vh",
  },
  "@media (max-width : 37.5em)": {
    height: "35vh",
  },
});

export const FouthSection_Container = styled("div")({
  width: "100%",
  height: "90%",
  //  backgroundColor : "green",
  padding: " 0px 32px 0px 32px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
});

export const FouthSection_HeaderButton = styled(Button)({
  width: "143px",
  height: "44px",
  borderRadius: "8px",
  fontSize: "18px",
  "@media (max-width : 56.3em)": {
    width: "120px",
    fontSize: "15px",
    height: "38px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "12.5px",
    width: "110px",
    height: "35px",
  },
  "@media (max-width : 25em)": {
    width: "100px",
    height: "35px",
    fontSize: "11.5px",
  },
});

export const FouthSection_SubText = styled("p")({
  width: "764px",
  height: "90px",
  fontSize: "20px",
  textTransform: "capitalize",
  "@media (max-width : 56.3em)": {
    width: "90%",
    height: "40px",
    fontSize: "15px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "12.5px",
    height: "fit-content",

    marginBottom: "10px",
  },
  "@media (max-width : 25em)": {
    fontSize: "11.5px",
  },
});

export const FouthSection_BigText = styled("p")({
  width: "1024px",
  height: "65px",
  fontSize: "36px",
  textTransform: "capitalize",
  "@media (max-width : 56.3em)": {
    width: "90%",
    fontSize: "28px",
    height: "55px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "23px",
    height: "fit-content",
    marginBottom: "10px",
  },
  "@media (max-width : 25em)": {
    fontSize: "18.5px",
    marginBottom: "13px",
  },
});

////////////////////////////////////////////////////
////Footer

export const Footer = styled("div")({
  width: "100vw",
  height: "40px",
  backgroundColor: "white",
  padding: "64px 64px 48px 64px",
  color: "black",
  display: "flex",
  justifyContent: "space-between",
  "@media (max-width : 25em)": {
    padding: "2px",
  },
});

export const Footer_ImgContainer = styled("div")({
  width: "21px",
  height: "21px",
});

export const Footer_ImgText = styled("p")({
  fontSize: "16px",
  textTransform: "capitalize",
  "@media (max-width : 25em)": {
    fontSize: "13px",
  },
});

export const Footer_ImgAndTextDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "101px",
  height: "24px",
});

export const Footer_CopyRight = styled("p")({
  width: "380px",
  height: "24px",
  "@media (max-width : 56.3em)": {
    width: "fit-content",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "14px",
  },
  "@media (max-width : 25em)": {
    fontSize: "10px",
    marginTop: "7.5px",
    marginRight: "10px",
  },
});

export const Footer_Img = styled("img")({
  width: "100%",
  height: "100%",
});

/////////////////////////////////////////////
///Auth

export const Auth = styled("div")({
  width: "100vw",
  height: "100vh",
  // padding : "1.5rem",
  backdropFilter: "blur(3px)",
  display: "flex",
  overflowX: "hidden",
  justifyContent: "center",
  alignItems: "center",
  // backgroundColor : "black",
  position: "fixed",
  top: "0%",
  zIndex: "1500",
});

export const Auth_COntainer = styled("div")({
  width: "600px",
  height: "378px",
  // backdropFilter : "blur(2.4)",
  backgroundColor: "white",
  borderRadius: "12px",
  border: "1px solid lightgrey",
  padding: "24px",
  justifyContent: "center",
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  "@media (max-width : 56.3em)": {
    width: "450px",
    height: "300px",
  },
  "@media (max-width : 28em)": {
    width: "300px",
    height: "338px",
  },
});

export const Auth_Header = styled("p")({
  fontSize: "2rem",
  textTransform: "capitalize",
  marginBottom: ".5rem",
  "@media (max-width : 56.3em)": {
    fontSize: "1.5rem",
  },
  "@media (max-width : 28em)": {
    fontSize: "1.25rem",
  },
});

export const Auth_HeaderContainer = styled("div")({
  height: "64px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "24px",
  "@media (max-width : 56.3em)": {
    height: "50px",
  },
});

export const Auth_HeaderContainerName = styled("div")({
  width: "476px",
  height: "64px",
  "@media (max-width : 56.3em)": {
    width: "100%",
  },
  "@media (max-width : 28em)": {
    width: "100%",
  },
});

export const Auth_HeaderContainerIcon = styled("div")({
  width: "32px",
  height: "32px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "32px",

  "@media (max-width : 56.3em)": {
    width: "24px",
    height: "24px",
  },
});

export const Auth_HeaderImage = styled("img")({
  width: "100%",
  height: "100%",
});

export const Auth_IConHEader = styled("p")({
  fontSize: "24px",
  textTransform: "capitalize",
  "@media (max-width : 56.3em)": {
    fontSize: "18px",
  },
});

export const Auth_ItemContainer = styled("div")({
  width: "572px",
  height: "159px",
  justifyContent: "space-around",
  alignItems: "center",
  display: "flex",
  borderRadius: "8px",
  padding: "24px 0px 24px 0px",
  "@media (max-width : 56.3em)": {
    width: "100%",
  },

  "@media (max-width : 28em)": {
    display: "block",
  },
});

export const Auth_SubHeader = styled("p")({
  fontSize: "1.5rem",
  textTransform: "capitalize",
  color: "grey",
  marginBottom: "1.5rem",
  "@media (max-width : 56.3em)": {
    fontSize: "1.2rem",
  },
  "@media (max-width : 28em)": {
    fontSize: ".8rem",
  },
});
export const Auth_IConHolder = styled("div")({
  width: "32px",
  height: "32px",

  borderRadius: "30%",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",

  marginBottom: "1rem",
  "@media (max-width : 28em)": {
    marginBottom: "0rem",
    marginRight: "5px",
  },
});

export const Auth_Item = styled("div")({
  width: "247px",
  height: "159px",
  padding: ".5rem",
  cursor: "pointer",
  // backgroundColor : "green",
  borderRadius: "1rem",
  border: "1px solid lightgrey",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.2)",

  "@media (max-width : 56.3em)": {
    width: "180px",
    height: "139px",
  },
  "@media (max-width : 28em)": {
    width: "100%",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "start",
    boxShadow: "none",
    marginTop: "10px",
  },
});
