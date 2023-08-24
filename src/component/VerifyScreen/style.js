import { styled, TextField, MenuItem, Button } from "@mui/material";

export const VerifyScreen = styled("div")({
  width: "100vw",
  height: "100vh",
  padding: "1rem",
  backgroundColor: "whitesmoke",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const VerifyScreen_Container = styled("div")({
  width: "408px",
  height: "268px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "12px",
  padding: "24px",
  backgroundColor: "white",
  boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.2)",

  "@media (max-width : 57.5em)": {
    width: "80%",
    padding: "20px",
  },
});

export const VerifyScreen_Main = styled("div")({
  width: "360px",
  height: "144px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: "10px",
  "@media (max-width : 57.5em)": {
    width: "100%",
  },
});

export const VerifyScreen_Icon = styled("img")({
  width: "100%",
  height: "100%",
});

export const VerifyScreen_MainIconHolder = styled("div")({
  width: "48px",
  height: "48px",
  borderRadius: "28px",
  border: "8px solid #D1FADF",
  marginBottom: "14px",
});

export const VerifyScreen_IconHolder = styled("div")({
  width: "fit-content",
  height: "fit-content",
  marginBottom: "2rem",
  padding: ".4rem",
  //   border : "1px solid blue",
  fontSize: "20rem",
  justifyContent: "center",
  display: "flex",
  color: "green",
  //  flexDirection : "column",
  alignItems: "center",
});

export const VerifyScreen_SectionContainerButton = styled(Button)({
  width: "360px",
  height: "44px",
  color: "white",
  backgroundColor: "blue",
  borderRadius: "8px",
  fontSize: "16px",
  "@media (max-width : 57.5em)": {
    width: "100%",
  },
  "@media (max-width : 41em)": {
    fontSize: "14px",
  },
});

export const VerifyScreen_DescriptionDiv = styled("div")({
  width: "200px",
  height: "76px",
  textAlign: "center",
});

export const VerifyScreen_PopUpDescriptionHeader = styled("h3")({
  fontSize: "13.97px",
  textTransform: "capitalize",
  textAlign: "center",
  marginBottom: "12px",
});

export const VerifyScreen_PopUpDescriptionSubHeader = styled("p")({
  textTransform: "capitalize",
  fontSize: "10.86px",
  textAlign: "center",
});
