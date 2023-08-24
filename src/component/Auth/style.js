import { styled } from "@mui/material";

export const Auth = styled("div")({
  width: "100vw",
  height: "100vh",
  // padding : "1.5rem",
  backgroundColor: "whitesmoke",
  display: "flex",
  overflowX: "hidden",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "black",
  position: "fixed",
});

export const Auth_COntainer = styled("div")({
  width: "572px",
  height: "378px",
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "24px",
  justifyContent: "center",
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
});

export const Auth_Header = styled("p")({
  fontSize: "2rem",
  textTransform: "capitalize",
  marginBottom: ".5rem",
});

export const Auth_HeaderContainer = styled("div")({
  height: "64px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "24px",
});

export const Auth_HeaderContainerName = styled("div")({
  width: "476px",
  height: "64px",
});

export const Auth_HeaderContainerIcon = styled("div")({
  width: "32px",
  height: "32px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "32px",
});

export const Auth_HeaderImage = styled("img")({
  width: "100%",
  height: "100%",
});

export const Auth_IConHEader = styled("p")({
  fontSize: "24px",
  textTransform: "capitalize",
});

export const Auth_ItemContainer = styled("div")({
  width: "572px",
  height: "159px",
  justifyContent: "space-around",
  alignItems: "center",
  display: "flex",
  borderRadius: "8px",
  padding: "24px 0px 24px 0px",
});

export const Auth_SubHeader = styled("p")({
  fontSize: "1.5rem",
  textTransform: "capitalize",
  color: "grey",
  marginBottom: "1.5rem",
});
export const Auth_IConHolder = styled("div")({
  width: "32px",
  height: "32px",

  borderRadius: "30%",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",

  marginBottom: "1rem",
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
});
