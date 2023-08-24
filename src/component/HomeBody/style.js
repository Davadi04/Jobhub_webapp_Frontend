import { Button, styled } from "@mui/material";

export const HomeBody = styled("div")({
  width: "1400px",
  height: "850px",
  padding: "1.5rem",
  backgroundColor: "whitesmoke",
  color: "black",
  display: "flex",
  position: "relative",
  zIndex: "20",
  // justifyContent : "center",
});

export const HomeBody_Navbar = styled("div")({
  width: "1100px",
  height: "76px",
  marginBottom: "16px",
  backgroundColor: "#FCFCFD",
  borderRadius: "8px",
  color: "black",
  padding: "5px 10px 10px 5px",
  marginBottom: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const HomeBody_Conatainer = styled("div")({
  width: "1100px",
  height: "1044px",
  position: "absolute",
  left: "120px",
  color: "black",
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
});
