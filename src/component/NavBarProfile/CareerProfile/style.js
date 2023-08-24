import { styled, TextField, MenuItem, Button } from "@mui/material";

export const CareerProfile = styled("div")({
  width: "100vw",
  height: "fit-content",
  padding: "1.5rem 0rem 0rem 0rem",
  backgroundColor: "whitesmoke",
  overflowX: "hidden",
});

export const CareerProfile_BlueHeader = styled("div")({
  width: "100%",
  height: "25rem",
  position: "relative",
  backgroundColor: "#2D3282",
  zIndex: "50",
});

export const CareerProfile_BodyContainer = styled("div")({
  width: "100%",
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  zIndex: "100",
  top: "60%",
});

export const CareerProfile_Body = styled("div")({
  width: "892px",
  height: "fit-content",
  border: "2px solid lightgrey",
  boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.2)",
  backgroundColor: "whitesmoke",
  borderRadius: "9px",
  marginBottom: "6.5rem",
  padding: "2rem",
  "@media (max-width : 75em)": {
    width: "85%",
  },
});

export const CareerProfile_NameAndRole = styled("div")({
  width: "100%",
  height: "10rem",
  // border : "1px solid lightgrey",
  // paddingLeft : ".5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  "@media (max-width : 75em)": {
    width: "80%",
  },
});

export const CareerProfile_HeaderDiv = styled("div")({
  width: "98%",
  height: "fit-content",
  border: "1px solid lightgrey",
  padding: ".8rem",
  borderRadius: "4px",
  marginBottom: "3.5rem",
});

export const CareerProfile_ProfileMain = styled("div")({
  width: "100%",
  height: "80%",

  padding: ".8rem",
  borderRadius: "4px",
});

export const CareerProfile_ProfileMainItemHeader = styled("h3")({
  fontSize: "16px",
  marginBottom: ".2rem",
  fontWeight: "bold",
  "@media (max-width : 37.5em)": {
    fontSize: "12px",
  },
});

export const CareerProfile_ProfileMainItemText = styled("p")({
  fontSize: "14px",
  marginBottom: ".2rem",
  "@media (max-width : 37.5em)": {
    fontSize: "11px",
  },
});

export const CareerProfile_ProfileMainItemDiv = styled("div")({
  width: "97%",
  height: "fit-content",
  // border : "1px solid lightgrey",
  backgroundColor: "#F2F4F7",
  padding: ".8rem",
  borderRadius: "4px",
  marginBottom: "1rem",
});

export const CareerProfile_NameBox = styled("div")({
  width: "6rem",
  height: "6rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  border: "2px solid lightgrey",
  marginRight: "1.5rem",
  "@media (max-width : 75em)": {
    width: "4.5rem",
    height: "4.5rem",
    marginRight: "1rem",
  },
  "@media (max-width : 37.5em)": {
    width: "3.5rem",
    height: "3.5rem",
    marginRight: "0.5rem",
  },
});

export const CareerProfile_NameBoxText = styled("h3")({
  fontSize: "42px",
  "@media (max-width : 75em)": {
    fontSize: "35px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "30px",
  },
});

export const CareerProfile_RoleBox = styled("div")({
  width: "fit-content",
  height: "100%",
});

export const CareerProfile_RoleText = styled("p")({
  fontSize: "24px",
  textTransform: "capitalize",
  "@media (max-width : 75em)": {
    fontSize: "18px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "15px",
  },
});

export const CareerProfile_RoleSubText = styled("p")({
  fontSize: "14px",
  textTransform: "capitalize",
  width: "fit-content",
  color: "black",
  fontWeight: "bold",
  padding: ".3rem",
  backgroundColor: "lightblue",
  borderRadius: "2px",
  marginTop: ".5rem",
});

export const CareerProfile_HeaderText = styled("p")({
  fontSize: "14px",
  textTransform: "capitalize",
  marginBottom: ".4rem",

  "@media (max-width : 37.5em)": {
    fontSize: "12px",
  },
});
