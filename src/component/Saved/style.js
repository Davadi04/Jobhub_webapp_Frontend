import { styled } from "@mui/material";

export const SavedItemSection = styled("div")({
  width: "150px",
  height: "40px",
  borderRadius: "24px",
  fontSize: "18px",
  backgroundColor: "whitesmoke",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid lightgrey",
  boxShadow: "0 .5rem .5rem rgba(0, 0, 0, 0.2)",
  cursor: "pointer",

  "&:hover": {
    transform: "translateY(-2px)",
    transition: "all .3s",
  },
});
